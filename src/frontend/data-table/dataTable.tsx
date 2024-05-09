// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ForgeUI from "@forge/ui";
import {
  DynamicTable,
  Label,
  DatePicker,
  Image,
  Stack,
  Inline,
  TextArea,
  Textfield,
  Button,
  Box,
  xcss,
  Checkbox,
  Link,
  Modal,
  ModalBody,
  ModalTransition,
  ModalTitle,
  ModalHeader,
  Icon,
  Toggle,
  User,
} from "@forge/react";
import React, { Fragment, useState, useEffect } from "react";
import { subMonths, addMonths } from "date-fns";
import * as mockAPI from "../../backend/mock-api";
import convertSecondsToHours from "../../backend/util";
import { FormattedWorklog, Worklogs } from "../../backend/interfaces";

// const data = fetch('localhost:3000/api/reports', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// const dataJson = (await data.json()) as WorklogDictionary[];
// return dataJson;
///////
export const TableSorted = () => {
  const baseURL = "https://datarecognitioncorp.atlassian.net";
  // Table State //
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const defaultFromDate = subMonths(new Date(), 2).toISOString();
  const defaultToDate = addMonths(new Date(), 2).toISOString();

  const [selectedFromDate, setFromDate] = useState(defaultFromDate);
  const [selectedToDate, setToDate] = useState(defaultToDate);
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const [visibleColumns, setVisibleColumns] = useState({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // Init Methods //
  const fetchColumnNames = async () => {
    const response = await mockAPI.getColumnNames(); // Fetch column names
    setColumnNames(response);
    initializeVisibility(response);
  };

  const initData = () => {
    fetchColumnNames();
    const eventSource = new EventSource(
      "https://tempo-jira-api-production.up.railway.app/worklogs/data-table"
    );

    eventSource.onmessage = (event) => {
      const newWorklogs = JSON.parse(event.data);
      setFilteredData((prevWorklogs) => [...prevWorklogs, ...newWorklogs]);
    };

    eventSource.onerror = (error) => {
      console.error("Failed to connect to the server or stream closed", error);
      eventSource.close();
    };

    return () => {
      eventSource.close(); // Close the stream when the component unmounts
    };
  };

  // Table Hooks //
  useEffect(() => {
    fetchColumnNames();
    const closeEventSource = initData();
    return closeEventSource;
  }, []);

  const getWorklogByDateRange = (startDate, endDate) => {
    const url = `https://tempo-jira-api-production.up.railway.app/worklogs/data-table?from=${startDate}&to=${endDate}`;
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const newWorklogs = JSON.parse(event.data);
      setFilteredData((prevWorklogs) => [...prevWorklogs, ...newWorklogs]);
    };

    eventSource.onerror = (error) => {
      console.error("Failed to connect to the server or stream closed", error);
      eventSource.close();
    };

    return () => {
      eventSource.close(); // Ensure to close the connection when the date range changes or component unmounts
    };
  };

  useEffect(() => {
    const closeEventSource = getWorklogByDateRange(
      selectedFromDate,
      selectedToDate
    );
    return closeEventSource;
  }, [selectedFromDate, selectedToDate]);

  // Table Methods //
  const searchByText = (text) => {
    if (!text) return;
    setFilteredData((currentData) =>
      currentData.filter(
        (log) =>
          log["Author Name"].toLowerCase().includes(text.toLowerCase()) ||
          log["Issue Name"].toLowerCase().includes(text.toLowerCase()) ||
          log["Account Name"].toLowerCase().includes(text.toLowerCase()) ||
          log["Department"].toLowerCase().includes(text.toLowerCase())
      )
    );
  };
  // const getWorklogByDateRange = async (startDate: string, endDate: string) => {
  //   return await mockAPI.getDateRangeLogs(startDate, endDate);
  // };

  // Date Methods //

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // getMonth() returns a zero-based index
    const year = date.getFullYear().toString();

    // Pad single-digit day and month with a zero
    const dayString = (day < 10 ? "0" + day : day).toString();
    const monthString = month < 10 ? "0" + month : month;

    return monthString + "/" + dayString + "/" + year;
  };

  const onFromDateChange = async (value: string) => {
    const updatedFromDate = formatDate(new Date(value));
    await setFromDate(updatedFromDate);
    const updatedData: any = await getWorklogByDateRange(
      selectedFromDate,
      selectedToDate
    );

    // const dataLayer = updatedData.map((row) => {
    //   return row;
    // });

    setFilteredData(updatedData);
  };

  const onToDateChange = async (value: string) => {
    const updatedToDate = formatDate(new Date(value));
    await setToDate(updatedToDate);
    const updatedData = await getWorklogByDateRange(
      selectedFromDate,
      selectedToDate
    );

    // const dataLayer = updatedData.map((row) => {
    //   return row;
    // });
    await setFilteredData(updatedData as any);
    // await setRows(createRows(updatedData));
  };

  const onNameInputChange = async (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  // Export Methods //
  const exportCSVData = async () => {
    const data: any = await getWorklogByDateRange(
      selectedFromDate,
      selectedToDate
    );

    const headers = [
      "Author ID",
      "Author Name",
      "Created At",
      "Logged Date",
      "Issue Name",
      "Department",
      "Department Ledger Code",
      "Time Spent",
      "Billable",
    ];
    // CSV
    const csv = data.map((row) => {
      return `${row["Author ID"]},${row["Author Name"]},${row["Created At"]},${
        row["Logged Date"]
      },${row["Issue Name"]},${row["Department"]},${
        row["Department Ledger Code"]
      },${convertSecondsToHours(row["Time Spent"])},${convertSecondsToHours(
        row["Billable"]
      )}`;
    });
    csv.unshift(headers.join(",")); // Add headers to the start of the array
    const csvString = csv.join("\n");
    const csvBlob = new Blob([csvString], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);
    const csvLink = document.createElement("a");
    csvLink.href = csvUrl;
    csvLink.download = "worklog.csv";
    csvLink.click();
  };

  const exportJSONData = async () => {
    const data = await getWorklogByDateRange(selectedFromDate, selectedToDate);

    // JSON
    const jsonString = JSON.stringify(data, null, 2);
    const jsonBlob = new Blob([jsonString], { type: "application/json" });
    const jsonUrl = URL.createObjectURL(jsonBlob);
    const jsonLink = document.createElement("a");
    jsonLink.href = jsonUrl;
    jsonLink.download = "worklog.json";
    jsonLink.click();
  };

  // Custom Column Methods //

  const initializeVisibility = (columns: string[]) => {
    const visibility = {};
    columns.forEach((column) => {
      visibility[column] = true; // Initialize all columns as visible
    });
    setVisibleColumns(visibility);
  };

  const handleColumnVisibilityChange = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  // Styles //
  const cardStyle = xcss({
    width: "70%",
    backgroundColor: "color.background.accent.gray.subtlest",
    padding: "space.200",
    borderRadius: "border.radius",
    boxShadow: "elevation.shadow.raised",
    transitionDuration: "200ms",
    listStyle: "none",
    "::before": {
      paddingInlineEnd: "space.050",
    },
    "::after": {
      paddingInlineStart: "space.050",
    },
    ":hover": {
      backgroundColor: "color.background.accent.blue.subtler.hovered",
      color: "color.text.inverse",
      transform: "scale(1.02)",
    },
  });
  // UI //
  return (
    <Fragment>
      <Inline space="space.1000">
        <Inline space="space.050" alignInline="start">
          <Stack alignBlock="start">
            <Label labelFor="fromDatePicker">From Date</Label>
            <DatePicker
              id="fromDatePicker"
              onChange={onFromDateChange}
              defaultValue={defaultFromDate}
            />
          </Stack>
          <Stack alignBlock="end">
            <Label labelFor="toDatePicker">To Date</Label>
            <DatePicker
              id="toDatePicker"
              onChange={onToDateChange}
              defaultValue={defaultToDate}
            />
          </Stack>
        </Inline>
        <Inline space="space.1000" alignInline="center">
          <Stack alignBlock="center">
            <Label labelFor="default-name-example">
              Search By Name / Account / Issue
            </Label>
            <TextArea value={searchText} onChange={onNameInputChange} />
          </Stack>
        </Inline>

        <Inline space="space.200" alignInline="end">
          <Stack space="space.200" alignBlock="start">
            <Button
              appearance="primary"
              onClick={() => {
                exportCSVData();
              }}
            >
              <Icon size="small" glyph="export" label={"Export CSV"} />
              Export CSV
            </Button>
            <Button
              appearance="warning"
              onClick={() => {
                exportJSONData();
              }}
            >
              <Icon size="small" glyph="export" label={"Export JSON"} />
              Export JSON
            </Button>
          </Stack>
          <Stack space="space.200" alignBlock="end">
            <Button appearance="default" onClick={openModal}>
              <Icon size="small" glyph="edit" label={"Edit Columns"} />
              Column Visibility
            </Button>
          </Stack>
        </Inline>
      </Inline>
      <Inline space="space.200">
        <Box
          padding="space.400"
          backgroundColor="color.background.neutral.subtle"
        >
          <DynamicTable
            defaultSortKey="Author Name"
            rowsPerPage={15}
            head={{
              cells: Object.keys(visibleColumns)
                .filter((column) => visibleColumns[column])
                .map((column) => ({ key: column, content: column })),
            }}
            rows={filteredData.map((row, index) => {
              const visibleEntries = Object.entries(row).filter((key) => {
                return visibleColumns[key[0]];
              });

              return {
                key: `row-${index}`,
                cells: visibleEntries.map(([key, value]) => {
                  let content;
                  switch (key) {
                    case "Avatar":
                      content = (
                        <Box xcss={cardStyle}>
                          <User accountId={row["Author ID"]} />
                        </Box>
                      );
                      break;
                    case "User Link":
                      content = (
                        <Link
                          href={`${baseURL}/wiki/people/${row["Author ID"]}`}
                        >
                          {value.toString()}
                        </Link>
                      );
                      break;
                    case "Issue Link":
                      content = (
                        <Link href={`${baseURL}/browse/VTE-${row["Issue ID"]}`}>
                          {value.toString()}
                        </Link>
                      );
                      break;
                    default:
                      content = value.toString();
                  }
                  return {
                    key: `cell-${key}`,
                    content: content,
                  };
                }),
              };
            })}
            defaultSortOrder="ASC"
            isLoading={false}
            highlightedRowIndex={Array.from({ length: 15 }, (_, i) => i * 2)}
            sortKey={isChecked ? "Author Name" : "Account Name"}
          />
        </Box>
        <ModalTransition>
          {isOpen && (
            <Modal onClose={closeModal}>
              <ModalHeader>
                <ModalTitle>Duplicate this page</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <Box
                  backgroundColor="color.background.accent.blue.subtlest"
                  padding="space.400"
                >
                  <Stack alignBlock="center">
                    <Label labelFor="columnVisibility">Column Visibility</Label>
                    {columnNames.map((column) => (
                      <Checkbox
                        key={column}
                        label={column}
                        isChecked={visibleColumns[column]}
                        onChange={() => handleColumnVisibilityChange(column)}
                      />
                    ))}
                  </Stack>
                  <Stack alignBlock="end">
                    <Toggle
                      id="toggle"
                      onChange={() => setIsChecked((prev) => !prev)}
                      isChecked={isChecked}
                    />
                    <Label labelFor="toggle">Sort By Employee / Account</Label>
                  </Stack>
                </Box>
              </ModalBody>
            </Modal>
          )}
        </ModalTransition>
      </Inline>
    </Fragment>
  );
};

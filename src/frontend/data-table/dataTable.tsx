// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  DynamicTable,
  Label,
  DatePicker,
  Stack,
  Inline,
  TextArea,
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
import { subMonths, addMonths, set } from "date-fns";
import * as mockAPI from "../../backend/mock-api";
import convertSecondsToHours from "../../backend/util";
import { debounce } from "lodash";
export const TableSorted = () => {
  const baseURL = "https://datarecognitioncorp.atlassian.net";
  // Table State //
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const defaultFromDate = subMonths(new Date(), 2).toISOString().split("T")[0];
  const defaultToDate = new Date().toISOString().split("T")[0];
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFromDate, setFromDate] = useState(defaultFromDate);
  const [selectedToDate, setToDate] = useState(defaultToDate);
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const [visibleColumns, setVisibleColumns] = useState({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  let textboxData = "";
  let eventSource ;
  const endDate = new Date().toISOString().split("T")[0];
  const tableDataToUse = searchData && searchData.length > 0 ? searchData : filteredData;
  // Init Methods //
  const fetchColumnNames = async () => {
    const response = await mockAPI.getColumnNames(); // Fetch column names
    setColumnNames(response);
    initializeVisibility(response);
  };

  const initData = () => {
    if (eventSource) {
      eventSource.close();
      setFilteredData([]);
    }
  
    eventSource = new EventSource(
      `https://tempo-jira-api-production.up.railway.app/app-worklogs/data-table?startDate=2024-05-01&endDate=${endDate}`
    );

    eventSource.onmessage = (event) => {
      const newWorklogs = JSON.parse(event.data);
      if (
        Array.isArray(newWorklogs) &&
        newWorklogs !== null &&
        newWorklogs.length > 0 &&
        newWorklogs !== undefined
      ) {
        setFilteredData((prevWorklogs) => [...prevWorklogs, ...newWorklogs]);
        setIsLoading(false);
      }
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
    if (eventSource) {
      eventSource.close();
      setFilteredData([]);
    }
    console.log("startDate", startDate); 
    console.log("endDate", endDate);
    const url = `https://tempo-jira-api-production.up.railway.app/app-worklogs/data-table?startDate=${startDate}&endDate=${endDate}`;
   
    eventSource = new EventSource(url);
    
    eventSource.onmessage = (event) => {
     
      const newWorklogs = JSON.parse(event.data);
    
      if (
        Array.isArray(newWorklogs) &&
        newWorklogs !== null &&
        newWorklogs.length > 0 &&
        newWorklogs !== undefined
      ) {
        setFilteredData((prevWorklogs) => {
          if (Array.isArray(prevWorklogs)) {
            return [...prevWorklogs, ...newWorklogs];
          } else {
            // Handle the case where prevWorklogs is not an array
            return [...newWorklogs];
          }
        });
        setIsLoading(false);
      }
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
    setFilteredData([]);
    return closeEventSource;
  }, [selectedFromDate, selectedToDate]);

  // Table Methods //
  const searchByText = () => {
    console.log("searchText", searchText);
    if (searchText) {
      if (searchText === "") {
        // getWorklogByDateRange(selectedFromDate, selectedToDate);
        setSearchText("");
        setSearchData(null);
        return;
      } else {
        console.log("filtering", searchText);
        const searchData = filteredData.filter((log) => {
          console.log("log", log);
          return (
            log["Author Name"]
              ?.toLowerCase()
              .includes(searchText.toLowerCase()) ||
            log["Account Name"]
              ?.toLowerCase()
              .includes(searchText.toLowerCase()) ||
            log["Department"]?.toLowerCase().includes(searchText.toLowerCase())
          );
        });
        setSearchData(searchData);
      }
      return;
    }
    else {
      getWorklogByDateRange(selectedFromDate, selectedToDate);
        setSearchText("");
        setSearchData(null);
        return;
    }
  };

  useEffect(() => {
    console.log("searchText", searchText);
    searchByText(); // Date Methods //
  }, [searchText]);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // getMonth() returns a zero-based index
    const year = date.getFullYear().toString();

    // Pad single-digit day and month with a zero
    const dayString = (day < 10 ? "0" + day : day).toString();
    const monthString = month < 10 ? "0" + month : month;

    return year + "-" + monthString + "-" + dayString;
  };

  const onFromDateChange = async (value: string) => {
    setIsLoading(true);
    const updatedFromDate = formatDate(new Date(value));
    const formate = formatDate(new Date(updatedFromDate));

    setFromDate(formate);
  };

  const onToDateChange = async (value: string) => {
    setIsLoading(true);
    const updatedToDate = formatDate(new Date(value));
    const formate = formatDate(new Date(updatedToDate));

    setToDate(formate);
  };
  const debouncedSearch = debounce((text) => {
    setSearchText(text);
  }, 300);

  const onNameInputChange = (event) => {
    textboxData = event;
    debouncedSearch(textboxData);
  };

  // Export Methods //
  const exportCSVData = async () => {
    const headers = [
      "Author ID",
      "Employee Number",
      "Author Name",
      "Created At",
      "Logged Date",
      "Issue Name",
      "Issue ID",
      "Department",
      "Department Ledger Code",
      "Account ID",
      "Account Key",
      "Account Name",
      "Issue Category",
      "Time Spent",
      "Billable",
    ];
    // CSV
    const csv = filteredData.map((row) => {
      return `${row["Author ID"]},${row["Employee Number"]},${
        row["Author Name"]
      },${row["Created At"]},${row["Logged Date"]},${row["Issue Name"]},${
        row["Issue ID"]
      },${row["Department"]},${row["Department Ledger Code"]}${row["Account ID"]},${row["Account Key"]},${
        row["Account Name"]
      },${row["Issue Category"]},${
        row["Time Spent"]
      },${row["Billable"]}`;
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
            <TextArea onChange={(e) => onNameInputChange(e.target.value)} />
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
            defaultSortKey="Logged Date"
            rowsPerPage={15}
            head={{
              cells: Object.keys(visibleColumns)
                .filter((column) => visibleColumns[column])
                .map((column) => ({ key: column, content: column })),
            }}
            rows={
              
              Array.isArray(filteredData) && filteredData.length > 0
                ? tableDataToUse.map((row, index) => {
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
                          case "Logged Time":
                            const timeParts = value.toString().split(":");
                            const dateObj = new Date();
                            dateObj.setHours(parseInt(timeParts[0]));
                            dateObj.setMinutes(parseInt(timeParts[1]));
                            dateObj.setSeconds(parseInt(timeParts[2]));
                            content = dateObj.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            });
                            break;
                            case "Created At":
                              content = value.toString().split("T")[0];
                              break;
                            case "Updated At":
                              content = value.toString().split("T")[0];
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
                  })
                : []
            }
            defaultSortOrder="ASC"
            isLoading={isLoading}
            highlightedRowIndex={Array.from({ length: 15 }, (_, i) => i * 2)}
            sortKey={isChecked ? "Author Name" : "Author Name"}
          />
        </Box>
        <ModalTransition>
          {isOpen && (
            <Modal onClose={closeModal}>
              <ModalHeader>
                <ModalTitle>Column Visibility</ModalTitle>
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

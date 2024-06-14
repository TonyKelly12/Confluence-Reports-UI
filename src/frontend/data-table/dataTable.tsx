// dataTable.tsx
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
  Text,
  ProgressBar,
} from "@forge/react";
import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  fetchColumnNames,
  initData,
  getWorklogByDateRange,
  searchByText,
  onFromDateChange,
  onToDateChange,
  debouncedSearch,
  onNameInputChange,
  exportCSVData,
  exportJSONData,
  initializeVisibility,
  handleColumnVisibilityChange,
} from "./data"; // Adjust the path accordingly
import { subWeeks, addDays } from "date-fns";
import { es } from "@faker-js/faker";

export const JIRA_BASE_URL = "https://datarecognitioncorp.atlassian.net";

export const TableSorted = () => {
  const baseURL = JIRA_BASE_URL;
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const defaultFromDate = subWeeks(new Date(), 1).toISOString().split("T")[0];
  const defaultToDate = new Date().toISOString().split("T")[0];
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFromDate, setFromDate] = useState(defaultFromDate);
  const [selectedToDate, setToDate] = useState(defaultToDate);
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [columnNames, setColumnNames] = useState<string[]>([]);
  const [visibleColumns, setVisibleColumns] = useState({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [eventSource, setEventSource] = useState(null);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const tableDataToUse =
    searchData && searchData.length > 0 ? searchData : filteredData;

 
  
  useEffect(() => {
    fetchColumnNames(setColumnNames, initializeVisibility, setVisibleColumns);
    const eSource = initData(setFilteredData, setIsLoading, setProgress, defaultToDate);
    setEventSource(eSource);
    return eSource
  }, []);

  useEffect(() => {
    stopEventStream(eventSource);
    console.log("useEffect");
    console.log("selectedFromDate", selectedFromDate);
    console.log("selectedToDate", selectedToDate);
    const eSource = getWorklogByDateRange(
      selectedFromDate,
      selectedToDate,
      setFilteredData,
      setIsLoading,
      setProgress
    );
    setEventSource(eSource);
    setFilteredData([]);
  }, [selectedFromDate, selectedToDate]);

  useEffect(() => {
    searchByText(searchText, filteredData, setSearchData, setSearchText);
  }, [searchText]);

  const onFromDateChangeHandler = async (value: string) => {
    console.log("onFromDateChangeHandler");
    console.log("value", value);
    eventSource.close();
   setEventSource(null);
   setFilteredData([]);
   await onFromDateChange(value, setIsLoading, setFromDate, stopEventStream, clearFilteredData);
  };

  const onToDateChangeHandler = async (value: string) => {
    console.log("onToDateChangeHandler");
    console.log("value", value);
    eventSource.close();
    setFilteredData([]);
    setEventSource(null);
   await onToDateChange(value, setIsLoading, setToDate, stopEventStream, clearFilteredData);
  };

  const onNameInputChangeHandler = (event) => {
    onNameInputChange(event, debouncedSearch(setSearchText));
  };

  const exportCSVHandler = () => {
    exportCSVData(filteredData);
  };

  const exportJSONHandler = () => {
    exportJSONData(filteredData);
  };

  const handleColumnVisibilityChangeHandler = (column) => {
    handleColumnVisibilityChange(column, setVisibleColumns);
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

  const stopEventStream = (eventSource) => {
    console.log("stopEventStream ran", eventSource);
    if (eventSource && eventSource.close) {
      console.log("stopping Event Stream", eventSource);
      eventSource.current.close();
      setEventSource(null);
    }
  };
  
  const clearFilteredData = () => {
    setFilteredData([]);
  };
  // UI //

  return (
    <Fragment>
      <Inline space="space.1000">
        <Inline space="space.050" alignInline="start">
          <Stack alignBlock="start">
            <Label labelFor="fromDatePicker">From Date</Label>
            <DatePicker
              id="fromDatePicker"
              onChange={onFromDateChangeHandler}
              defaultValue={defaultFromDate}
            />
          </Stack>
          <Stack alignBlock="end">
            <Label labelFor="toDatePicker">To Date</Label>
            <DatePicker
              id="toDatePicker"
              onChange={onToDateChangeHandler}
              defaultValue={defaultToDate}
            />
          </Stack>
        </Inline>
        <Inline space="space.1000" alignInline="center">
          <Stack alignBlock="center">
            <Label labelFor="default-name-example">
              Search By Name / Account / Issue
            </Label>
            <TextArea
              onChange={(e) => onNameInputChangeHandler(e.target.value)}
            />
          </Stack>
        </Inline>
        <Inline space="space.200" alignInline="end">
          <Stack space="space.200" alignBlock="start">
            <Button appearance="primary" onClick={exportCSVHandler}>
              <Icon size="small" glyph="export" label={"Export CSV"} />
              Export CSV
            </Button>
            <Button appearance="warning" onClick={exportJSONHandler}>
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
      <Box padding="space.200" backgroundColor="color.background.accent.blue.subtlest" >
        <Text>
          {progress === 1 ? "All Data Loaded Successfully" : "Data Loading In Progress...."}
        </Text>
        <ProgressBar value={progress} />
      </Box>
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
            sortKey={isChecked ? "Logged Date" : "Logged Date"}
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
                        onChange={() =>
                          handleColumnVisibilityChangeHandler(column)
                        }
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

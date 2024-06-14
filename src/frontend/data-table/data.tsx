// dataTableUtils.ts
import { subWeeks } from "date-fns";
import * as util from "../../backend/util";
import { debounce } from "lodash";

export const API_KEY =
  "ATATT3xFfGF0_So7UzB9Lmm5W7wEY4xJZf43baOBZU3JctTj0VF6kUvlUGQoyJgPLUhcJo3SLWhjFwbFuRZ0aWGvuwaveckYncZsKdRblQNhFXYA7zHgfK0VFBzC0VRLcCtvZJYkm1kllmAxPu7ErtX5JYGNGMxjXrSgrNrwVWcqFrxrTW3mLps=025EB935";
export const API_BASE_URL = "https://tempo-jira-api-production.up.railway.app";
export const JIRA_BASE_URL = "https://datarecognitioncorp.atlassian.net";
const fetchColumnNames = async (
  setColumnNames,
  initializeVisibility,
  setVisibleColumns
) => {
  const response = await util.getColumnNames();
  setColumnNames(response);
  initializeVisibility(response, setVisibleColumns);
};

const sessionId = 1234

const initData = (setFilteredData, setIsLoading, setProgress, endDate) => {
  let eventSource;
  let streamEnded = false;
  if (eventSource) {
    eventSource.close();
    setFilteredData([]);
  }
  const startDate = subWeeks(endDate, 1).toISOString().split("T")[0];
  
  eventSource = new EventSource(
    `${API_BASE_URL}/app-worklogs/data-table?startDate=${startDate}&endDate=${endDate}&sessionId=${sessionId}&api-key=${API_KEY}`
  );
  let prevProgress = 0;
  eventSource.onmessage = (event) => {

    const eventData = JSON.parse(event.data);
    console.log(eventData.message ? eventData.message : "No message");
    if (eventData.message === "End of stream") {
      console.log("End of stream");
      console.log(eventData);
      setIsLoading(false);
      setProgress(1);
      streamEnded = true;
      return eventSource.close();
    }
    const { totalCount, formattedWorklogs } = eventData;
    console.log("totalCount", totalCount);
    if (Array.isArray(formattedWorklogs) && formattedWorklogs.length > 0) {
      setFilteredData((prevWorklogs) => [
        ...prevWorklogs,
        ...formattedWorklogs,
      ]);
      setIsLoading(false);
    }
    setProgress(() => {
      const newProgress =
        prevProgress && formattedWorklogs
          ? prevProgress + formattedWorklogs.length
          : 0;
      console.log("newProgress", newProgress);

      const progressFraction = newProgress / totalCount;
      console.log("progressFraction", progressFraction);
      return progressFraction;
    });
    prevProgress = formattedWorklogs ? formattedWorklogs.length : 0;
  };

  eventSource.onerror = (error) => {
    if (!streamEnded) {
      console.error("Failed to connect to the server or stream closed", error);
      console.log(error);
      setProgress(1);
      eventSource.close();
    }
  };

  return () => {
    
    setProgress(1);
    return eventSource;
  };
};

const getWorklogByDateRange = (
  startDate,
  endDate,
  setFilteredData,
  setIsLoading,
  setProgress
) => {
  let eventSource;
  if (eventSource) {
    eventSource.close();
    setFilteredData([]);
  }

  const url = `${API_BASE_URL}/app-worklogs/data-table?startDate=${startDate}&endDate=${endDate}&sessionId=${sessionId}&api-key=${API_KEY}`;
  eventSource = new EventSource(url);
  let streamEnded = false;
  let prevProgress = 0;
  eventSource.onmessage = (event) => {

    const eventData = JSON.parse(event.data);
    console.log(eventData.message ? eventData.message : "No message");
    if (eventData.message === "End of stream") {
      console.log("End of stream");
      console.log(eventData);
      setIsLoading(false);
      setProgress(1);
      streamEnded = true;
      return eventSource.close();
    }
    const { totalCount, formattedWorklogs } = eventData;
    console.log("totalCount", totalCount);
    if (Array.isArray(formattedWorklogs) && formattedWorklogs.length > 0) {
      setFilteredData((prevWorklogs) => [
        ...prevWorklogs,
        ...formattedWorklogs,
      ]);
      setIsLoading(false);
    }
    setProgress(() => {
      const newProgress =
        prevProgress && formattedWorklogs
          ? prevProgress + formattedWorklogs.length
          : 0;
      console.log("newProgress", newProgress);

      const progressFraction = newProgress / totalCount;
      console.log("progressFraction", progressFraction);
      return progressFraction;
    });
    prevProgress = formattedWorklogs ? formattedWorklogs.length : 0;
  };

  eventSource.onerror = (error) => {
    console.error("Failed to connect to the server or stream closed", error);
    setProgress(1);
    eventSource.close();
  };

  return () => {
    return eventSource
  };
};
const getRandomUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (crypto.getRandomValues(new Uint8Array(1))[0] % 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const searchByText = (
  searchText,
  filteredData,
  setSearchData,
  setSearchText
) => {
  if (searchText) {
    const searchData = filteredData.filter((log) => {
      return (
        log["Author Name"]?.toLowerCase().includes(searchText.toLowerCase()) ||
        log["Account Name"]?.toLowerCase().includes(searchText.toLowerCase()) ||
        log["Department"]?.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setSearchData(searchData);
  } else {
    setSearchText("");
    setSearchData(null);
  }
};

const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString();

  const dayString = (day < 10 ? "0" + day : day).toString();
  const monthString = month < 10 ? "0" + month : month;

  return year + "-" + monthString + "-" + dayString;
};

const onFromDateChange = async (value, setIsLoading, setFromDate, stopEventStream, clearFilteredData) => {
  console.log("onFromDateChange");
  console.log("value", value);
  setIsLoading(true);
  stopEventStream(); // Stop the event stream
  clearFilteredData(); // Clear the filtered data
  const updatedFromDate = formatDate(new Date(value));
  const formate = formatDate(new Date(updatedFromDate));
  console.log("formate", formate);
  setFromDate(formate);
};

const onToDateChange = async (value, setIsLoading, setToDate, stopEventStream, clearFilteredData) => {
  console.log("onToDateChange");
  console.log("value", value);
  setIsLoading(true);
  stopEventStream(); // Stop the event stream
  clearFilteredData(); 
  const updatedToDate = formatDate(new Date(value));
  const formate = formatDate(new Date(updatedToDate));
  console.log("formate", formate);
  setToDate(formate);
};

const debouncedSearch = debounce((text, setSearchText) => {
  setSearchText(text);
}, 300);

const onNameInputChange = (event, debouncedSearch) => {
  const textboxData = event;
  debouncedSearch(textboxData);
};

const exportCSVData = (filteredData) => {
  const headers = [
    "Author ID",
    "Employee Number",
    "Author Name",
    "Department",
    "Department Ledger Code",
    "Log ID",
    "Account ID",
    "Account Key",
    "Account Name",
    "Issue Name",
    "Issue ID",
    "Logged Date",
    "Logged Time",
    "Issue Category",
    "Time Spent",
    "Billable",
  ];
  const csv = filteredData.map((row) => {
    return `${row["Author ID"]},${row["Employee Number"]},${row["Author Name"]},${row["Department"]},${row["Department Ledger Code"]},${row["Log ID"]},${row["Account ID"]},${row["Account Key"]},${row["Account Name"]},${row["Issue Name"]},${row["Issue ID"]},${row["Logged Date"]},${row["Logged Time"]},${row["Issue Category"]},${row["Time Spent"]},${row["Billable"]}`;
  });
  csv.unshift(headers.join(","));
  const csvString = csv.join("\n");
  const csvBlob = new Blob([csvString], { type: "text/csv" });
  const csvUrl = URL.createObjectURL(csvBlob);
  const csvLink = document.createElement("a");
  csvLink.href = csvUrl;
  csvLink.download = "worklog.csv";
  csvLink.click();
};

const exportJSONData = async (
  getWorklogByDateRange,
  selectedFromDate,
  selectedToDate
) => {
  const data = await getWorklogByDateRange(selectedFromDate, selectedToDate);
  const jsonString = JSON.stringify(data, null, 2);
  const jsonBlob = new Blob([jsonString], { type: "application/json" });
  const jsonUrl = URL.createObjectURL(jsonBlob);
  const jsonLink = document.createElement("a");
  jsonLink.href = jsonUrl;
  jsonLink.download = "worklog.json";
  jsonLink.click();
};

const initializeVisibility = (columns, setVisibleColumns) => {
  const visibility = {};
  columns.forEach((column) => {
    visibility[column] = true;
  });
  setVisibleColumns(visibility);
};

const handleColumnVisibilityChange = (column, setVisibleColumns) => {
  setVisibleColumns((prev) => ({
    ...prev,
    [column]: !prev[column],
  }));
};

export {
  fetchColumnNames,
  initData,
  getWorklogByDateRange,
  searchByText,
  formatDate,
  onFromDateChange,
  onToDateChange,
  debouncedSearch,
  onNameInputChange,
  exportCSVData,
  exportJSONData,
  initializeVisibility,
  handleColumnVisibilityChange,
};

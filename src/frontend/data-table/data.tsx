// dataTableUtils.ts
import { set, subWeeks } from "date-fns";
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
const BATCH_SIZE = 3000; // Replace with your known batch size
const MAX_PROGRESS_BEFORE_COMPLETE = 95; // Cap progress at 95% before final batch

const initData = (setFilteredData, setIsLoading, setProgress, endDate) => {
  let eventSource;
  if (eventSource) {
    eventSource.close();
    setFilteredData([]);
  }
  const startDate = subWeeks(endDate, 1).toISOString().split("T")[0];
  eventSource = new EventSource(
    `${API_BASE_URL}/app-worklogs/data-table?startDate=${startDate}&endDate=${endDate}&api-key=${API_KEY}`
  );
  let totalData = 0;  // Total data received
  let totalCount = 0; // Total count of worklogs

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data) {
      totalCount = data.length
      console.log("data: ", data);
    } else if (Array.isArray(data) && data.length > 0) {
      setFilteredData((prevWorklogs) => [...prevWorklogs, ...data]);
      setIsLoading(false);

      totalData += data.length;
      const progress = Math.min(
        (totalData / totalCount) * 100,
        MAX_PROGRESS_BEFORE_COMPLETE
      );
      setProgress(progress);
    }
  };

  eventSource.onerror = (error) => {
    console.error("Failed to connect to the server or stream closed", error);
    eventSource.close();
  };

  return () => {
    eventSource.close();
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

  const url = `${API_BASE_URL}/app-worklogs/data-table?startDate=${startDate}&endDate=${endDate}&api-key=${API_KEY}`;
  eventSource = new EventSource(url);
  let totalData = 0;
  let totalCount = 0; // Total count of worklogs

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data) {
      totalCount = data.length;
    } else if (Array.isArray(data) && data.length > 0) {
      setFilteredData((prevWorklogs) => {
        if (Array.isArray(prevWorklogs)) {
          return [...prevWorklogs, ...data];
        } else {
          return [...data];
        }
      });
      setIsLoading(false);
      totalData += data.length;
      let progress = Math.min(
        (totalData / totalCount) * 100,
        MAX_PROGRESS_BEFORE_COMPLETE
      );
      if (progress > 0.95) {
        progress = 0.95;
      }
      console.log("progress value: ", progress);
      setProgress(progress);
    }
  };

  eventSource.onerror = (error) => {
    console.error("Failed to connect to the server or stream closed", error);
    setProgress(1);
    eventSource.close();
  };

  return () => {
    console.log("closing event source");
    setProgress(1);
    eventSource.close();
  };
};

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

const onFromDateChange = async (value, setIsLoading, setFromDate) => {
  setIsLoading(true);
  const updatedFromDate = formatDate(new Date(value));
  const formate = formatDate(new Date(updatedFromDate));
  setFromDate(formate);
};

const onToDateChange = async (value, setIsLoading, setToDate) => {
  setIsLoading(true);
  const updatedToDate = formatDate(new Date(value));
  const formate = formatDate(new Date(updatedToDate));
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

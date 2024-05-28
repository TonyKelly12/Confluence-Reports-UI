// dataTableUtils.ts
import * as util from "../../backend/util";
import { debounce } from "lodash";


const fetchColumnNames = async (setColumnNames, initializeVisibility, setVisibleColumns) => {
  const response = await util.getColumnNames();
  setColumnNames(response);
  initializeVisibility(response, setVisibleColumns);
};

const initData = (setFilteredData, setIsLoading, endDate) => {
  let eventSource;
  if (eventSource) {
    eventSource.close();
    setFilteredData([]);
  }

  eventSource = new EventSource(
    `https://tempo-jira-api-production.up.railway.app/app-worklogs/data-table?startDate=2024-05-01&endDate=${endDate}`
  );

  eventSource.onmessage = (event) => {
    const newWorklogs = JSON.parse(event.data);
    if (Array.isArray(newWorklogs) && newWorklogs.length > 0) {
      setFilteredData((prevWorklogs) => [...prevWorklogs, ...newWorklogs]);
      setIsLoading(false);
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
  setIsLoading
) => {
  let eventSource;
  if (eventSource) {
    eventSource.close();
    setFilteredData([]);
  }

  const url = `https://tempo-jira-api-production.up.railway.app/app-worklogs/data-table?startDate=${startDate}&endDate=${endDate}`;
  eventSource = new EventSource(url);

  eventSource.onmessage = (event) => {
    const newWorklogs = JSON.parse(event.data);
    if (Array.isArray(newWorklogs) && newWorklogs.length > 0) {
      setFilteredData((prevWorklogs) => {
        if (Array.isArray(prevWorklogs)) {
          return [...prevWorklogs, ...newWorklogs];
        } else {
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
    eventSource.close();
  };
};

const searchByText = (searchText, filteredData, setSearchData, setSearchText) => {
  if (searchText) {
    const searchData = filteredData.filter((log) => {
      return (
        log["Author Name"]?.toLowerCase().includes(searchText.toLowerCase()) ||
        log["Account Name"]
          ?.toLowerCase()
          .includes(searchText.toLowerCase()) ||
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
  const csv = filteredData.map((row) => {
    return `${row["Author ID"]},${row["Employee Number"]},${row["Author Name"]},${row["Created At"]},${row["Logged Date"]},${row["Issue Name"]},${row["Issue ID"]},${row["Department"]},${row["Department Ledger Code"]}${row["Account ID"]},${row["Account Key"]},${row["Account Name"]},${row["Issue Category"]},${row["Time Spent"]},${row["Billable"]}`;
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

const exportJSONData = async (getWorklogByDateRange, selectedFromDate, selectedToDate) => {
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

export declare const API_KEY = "ATATT3xFfGF0_So7UzB9Lmm5W7wEY4xJZf43baOBZU3JctTj0VF6kUvlUGQoyJgPLUhcJo3SLWhjFwbFuRZ0aWGvuwaveckYncZsKdRblQNhFXYA7zHgfK0VFBzC0VRLcCtvZJYkm1kllmAxPu7ErtX5JYGNGMxjXrSgrNrwVWcqFrxrTW3mLps=025EB935";
export declare const API_BASE_URL = "https://tempo-jira-api-production.up.railway.app";
export declare const JIRA_BASE_URL = "https://datarecognitioncorp.atlassian.net";
declare const fetchColumnNames: (setColumnNames: any, initializeVisibility: any, setVisibleColumns: any) => Promise<void>;
declare const initData: (setFilteredData: any, setIsLoading: any, setProgress: any, endDate: any) => () => void;
declare const getWorklogByDateRange: (startDate: any, endDate: any, setFilteredData: any, setIsLoading: any, setProgress: any) => () => void;
declare const searchByText: (searchText: any, filteredData: any, setSearchData: any, setSearchText: any) => void;
declare const formatDate: (date: Date) => string;
declare const onFromDateChange: (value: any, setIsLoading: any, setFromDate: any) => Promise<void>;
declare const onToDateChange: (value: any, setIsLoading: any, setToDate: any) => Promise<void>;
declare const debouncedSearch: any;
declare const onNameInputChange: (event: any, debouncedSearch: any) => void;
declare const exportCSVData: (filteredData: any) => void;
declare const exportJSONData: (getWorklogByDateRange: any, selectedFromDate: any, selectedToDate: any) => Promise<void>;
declare const initializeVisibility: (columns: any, setVisibleColumns: any) => void;
declare const handleColumnVisibilityChange: (column: any, setVisibleColumns: any) => void;
export { fetchColumnNames, initData, getWorklogByDateRange, searchByText, formatDate, onFromDateChange, onToDateChange, debouncedSearch, onNameInputChange, exportCSVData, exportJSONData, initializeVisibility, handleColumnVisibilityChange, };

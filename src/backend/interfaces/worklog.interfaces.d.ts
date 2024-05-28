import { IFilteredData } from "./issue.interfaces";
import { Metadata } from "./jira.interfaces";
import { Worklog } from "./table.interfaces";
import { User } from "./user.interfaces";
export interface FormattedWorklog {
    'Avatar': string;
    'Author ID': string;
    'Author Name': string;
    'User Link': string;
    'Department': string;
    'Department Ledger Code': string;
    'Log ID': number;
    'Account ID': string;
    'Account Name': string;
    'Issue Name': string;
    'Issue ID': string;
    'Issue Link': string;
    'Logged Date': string;
    'Logged Time': string;
    'Created At': string;
    'Updated At': string;
    'Time Spent': number;
    'Billable': number;
}
export interface Worklogs {
    Worklog: Worklog;
}
export interface RootTimeLogs {
    user: {
        User: User;
    };
    worklogs: Worklogs[];
}
export interface WorklogResponse {
    self: string;
    metadata: Metadata;
    results: Worklog[];
}
export interface WorklogDictionary {
    userId: string;
    displayName: string;
    worklogs: FilteredWorklog[];
}
export interface FilteredWorklog {
    issue: IFilteredData;
    worklog: Worklog;
    parent: string | null;
}
export interface FilteredWorklogData {
    logDate: string;
    worklog: FilteredWorklog;
}

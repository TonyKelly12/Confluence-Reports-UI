/// <reference types="react" />
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
export interface AvatarUrls {
    '48x48': string;
    '24x24': string;
    '16x16': string;
    '32x32': string;
}
export interface User {
    self: string;
    accountId: string;
    accountType: string;
    emailAddress?: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    locale: string;
}
export interface JiraUser {
    accountId: string;
    accountType: string;
    active: boolean;
    applicationRoles: ApplicationRoles;
    avatarUrls: AvatarUrls;
    displayName: string;
    emailAddress: string;
    groups: Groups;
    key: string;
    name: string;
    self: string;
    timeZone: string;
}
export interface UserCondensed {
    id: string;
    displayName: string;
}
export interface WorklogResponse {
    self: string;
    metadata: Metadata;
    results: Worklog[];
}
export interface Metadata {
    count: number;
    offset: number;
    limit: number;
}
export declare type TableCell = {
    key: any;
    content: JSX.Element | string | number;
};
export declare type TableRow = {
    key: string;
    cells: TableCell[];
    content: any;
};
export declare type CreatedRows = TableRow[];
export interface Worklog {
    self: string;
    tempoWorklogId: number;
    issue: {
        self: string;
        id: number;
        issueName: string;
    };
    accountId: string;
    accountName: string;
    timeSpentSeconds: number;
    billableSeconds: number;
    issueStartDate: string;
    loggedTime: string;
    loggedDate: string;
    createdAt: string;
    updatedAt: string;
    author: {
        avatar: string;
        self: string;
        userID: string;
        displayName: string;
    };
    department: string;
    departmentLedgerCode: string;
}
export interface IssueBase {
    self: string;
    id: string;
}
export interface JiraResponseBase {
    self: string;
    metadata: Metadata;
}
export interface WorklogDictionary {
    userId: string;
    displayName: string;
    worklogs: FilteredWorklog[];
}
export interface Author {
    self: string;
    accountId: string;
}
export interface FormattedAuthor {
    avatar: string;
    self: string;
    userID: string;
    displayName: string;
}
export interface WeeklyReport {
    date: string;
    worklogs: Worklog[];
}
export interface MonthlyReport {
    month: number;
    year: number;
    weeklyReports: WeeklyReport[];
}
export interface Issue extends IssueBase {
    expand: string;
    key: string;
    fields: Fields;
}
export interface FormattedIssue {
    issueName: string;
    id: number;
    self: string;
}
export interface Fields {
    parent?: Parent;
    customfield_13580: unknown;
    customfield_13460: unknown;
    customfield_13418: CustomField[];
    customfield_13317: CustomField[];
    customfield_13316: CustomField[];
    issuetype: IssueType;
    project: Project;
    assignee: Assignee;
    reporter: Reporter;
    worklog: Worklog;
    status: Status;
}
export interface IFilteredData {
    id: string;
    key: string;
    parent?: string | null;
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
export interface TableEntry {
    employeeNumber: string;
    name: string;
    projectCode: string;
    projectTitle: string;
    departmentName: string;
    departmentLedgerCode: string;
    billableHours: number;
    date: string;
    payCode: string;
    hours: number;
    task: string;
    jobName: string;
    payCategoryName: string;
}
export interface GetArrayBaseResponse {
    maxResults: number;
    startAt: number;
    total: number;
    isLast: boolean;
}
interface Parent {
    id: string;
    key: string;
    self: string;
    fields: ParentFields;
}
interface ParentFields {
    summary: string;
    status: Status;
    priority: Priority;
    issuetype: IssueType;
}
interface CustomField {
    clauseNames: string[];
    custom: boolean;
    id: string;
    key: string;
    name: string;
    navigable: boolean;
    orderable: boolean;
    schema: {
        custom: string;
        customId: number;
        type: string;
    };
    searchable: boolean;
    untranslatedName: string;
}
interface IssueType {
    self: string;
    id: string;
    description: string;
    iconUrl: string;
    name: string;
    subtask: boolean;
    avatarId: number;
    hierarchyLevel: number;
}
interface Project {
    self: string;
    id: string;
    key: string;
    name: string;
    projectTypeKey: string;
    simplified: boolean;
    avatarUrls: AvatarUrls;
}
interface Assignee {
    self: string;
    accountId: string;
    emailAddress: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountType: string;
}
interface Reporter {
    self: string;
    accountId: string;
    emailAddress: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountType: string;
}
interface Status {
    self: string;
    description: string;
    iconUrl: string;
    name: string;
    id: string;
    statusCategory: StatusCategory;
}
interface StatusCategory {
    self: string;
    id: number;
    key: string;
    colorName: string;
    name: string;
}
interface Priority {
    self: string;
    iconUrl: string;
    name: string;
    id: string;
}
interface ApplicationRoles {
    items: unknown[];
    size: number;
}
interface Groups {
    items: GroupNames[];
    size: number;
}
interface GroupNames {
    groupId: string;
    name: string;
    self: string;
}
export {};

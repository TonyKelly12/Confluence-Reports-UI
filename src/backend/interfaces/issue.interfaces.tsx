import { Worklog } from "./table.interfaces";
import { AvatarUrls } from "./user.interfaces";

export interface IssueBase {
    self: string;
    id: string;
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
    customfield_13580: unknown; // Replace 'any' with more specific types as needed
    customfield_13460: unknown;
    // Include other fields as required
    customfield_13418: CustomField[];
    customfield_13317: CustomField[];
    customfield_13316: CustomField[];
    // Add other custom fields as needed
    issuetype: IssueType;
    project: Project;
    assignee: Assignee;
    reporter: Reporter;
    worklog: Worklog;
    status: Status;
    // Add other properties as required
  }
  export interface IFilteredData {
    id: string;
    key: string;
    parent?: string | null;
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
  export interface ApplicationRoles {
    items: unknown[];
    size: number;
  }
  
  export interface Groups {
    items: GroupNames[];
    size: number;
  }
  
  export interface GroupNames {
    groupId: string;
    name: string;
    self: string;
  }
export type TableCell = {
    key: any;
    content: JSX.Element | string | number;
  };
  
  export type TableRow = {
    key: string;
    cells: TableCell[];
    content: any; // This is the missing property
  };
  
  export type CreatedRows = TableRow[];
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
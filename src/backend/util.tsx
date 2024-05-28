export default function convertSecondsToHours(seconds: number): number {
    const hours = seconds / 3600;
    return hours;
  }

  export function getColumnNames(): string[] {
    return [
      "Avatar",
      "Author ID",
      "Employee Number",
      "Author Name",
      "User Link",
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
      "Created At",
      "Updated At",
      "Issue Category",
      "Time Spent",
      "Billable",
    ];
  }
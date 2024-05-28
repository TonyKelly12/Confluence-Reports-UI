import { Worklog } from "./table.interfaces";

export interface WeeklyReport {
  date: string; // Represents the start date of the week
  worklogs: Worklog[];
}

export interface MonthlyReport {
  month: number; // Represents the month of the report (1-12)
  year: number; // Represents the year of the report
  weeklyReports: WeeklyReport[];
}



import { Worklog } from "./table.interfaces";
export interface WeeklyReport {
    date: string;
    worklogs: Worklog[];
}
export interface MonthlyReport {
    month: number;
    year: number;
    weeklyReports: WeeklyReport[];
}

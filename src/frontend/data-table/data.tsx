import { addMonths, subMonths } from "date-fns";
import {Worklogs} from "../../backend/interfaces";
import * as mockAPI from "../../backend/mock-api";
// import convertSecondsToHours from "../../backend/util";

// const createKey = (input) => {
//     return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
//   }

// let data: Worklogs[][]  = getWorklogDictionary();
function getWorklogDictionary() {
    // Mock Data
     return mockAPI.getDateRangeLogs(subMonths(new Date(), 2).toISOString(), addMonths(new Date(),2).toISOString());

    // const data = fetch('localhost:3000/api/reports', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const dataJson = (await data.json()) as WorklogDictionary[];
    // return dataJson;

  }
export function getWorklogByDateRange(startDate: string, endDate: string) {
    return  mockAPI.getDateRangeLogs(startDate, endDate);
}

export function getWorklogByUser(text: string) {
    return  mockAPI.searchByText(text);
}

// function generateTimeSheetEntries() {
//     const worklogs = getWorklogDictionary();
  
//     const data = worklogs.map((worklog) => {
//       const worklogs = worklog.worklogs;
//       const worklogEntries = worklogs.map((log) => {
//         const entry: TableEntry = {
//             employeeNumber: worklog.userId, // comes from jira
//             name: worklog.displayName,
//             billableHours: log.worklog.billableSeconds, //comes from worklogs
//             projectTitle: log.parent ? log.parent : log.issue.key,
//             departmentName: '', // comes from assets
//             departmentLedgerCode: '',
//             date: log.worklog.startDate ?? '',
//             // get pay codes from Evan
//             hours: log.worklog.timeSpentSeconds ?? 0,
//             task: log.issue.id ?? '', // comes from worklogs
//             jobName: log.issue.key,
//             projectCode: "",
//             payCode: "",
//             payCategoryName: ""
//         };
//         return entry;
//       });
  
//       return worklogEntries;
//     });
//     return data;
//   }

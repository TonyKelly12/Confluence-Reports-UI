import {
  AvatarUrls,
  FilteredWorklog,
  FilteredWorklogData,
  FormattedWorklog,
  IFilteredData,
  RootTimeLogs,
  User,
  Worklog,
  WorklogDictionary,
  Worklogs,
} from './interfaces';
import { createUserWorklogObjects, mapWorklogData } from './reports';
import { UserDB, WorklogDB } from './mock-db';
import { faker } from '@faker-js/faker';
import axios from 'axios';

export function getUsers(): User[] {
  return UserDB;
}
/*
avatar: string;
  authorID: string;
  authorName: string;
  userLink: string;
  department: string;
  departmentLedgerCode: string;
  tempoWorklogId: number;
  accountId: string;
  accountName: string;
  issueName: string;
  issueId: string;
  issueLink: string;
  timeSpentSeconds: number;
  billableSeconds: number;
  loggedDate: string;
  loggedTime: string;
  createdAt: string;
  updatedAt: string;
*/
export function getColumnNames(): string[] {
  return [
    'Avatar',
    'Author ID',
    'Author Name',
    'User Link',
    'Department',
    'Department Ledger Code',
    'Log ID',
    'Account ID',
    'Account Name',
    'Issue Name',
    'Issue ID',
    'Issue Link',
    'Logged Date',
    'Logged Time',
    'Created At',
    'Updated At',
    'Time Spent',
    'Billable',
  ];
}

export async function getWorklogs() {
  const resp = await axios.get('https://tempo-jira-api-production.up.railway.app/worklogs/data-table')
  return resp.data;
}

// Fix below
export async  function getDateRangeLogs(startDate: string, endDate: string) {
  const logs = await getWorklogs();
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);

  const filteredLogs = logs
    .map((log) => {
        const logDate = new Date(log["Logged Date"]);
        console.log('logDate', logDate);
        logDate.setHours(0, 0, 0, 0);
        return logDate >= start && logDate <= end;
    })
    .filter((logArray) => logArray.length > 0); // Remove empty sub-arrays

  console.log('filteredLogs', filteredLogs);
  return logs;
}

export async function searchByText(text: string) {
  const logs =  await getWorklogs();
  return logs
    .map((log) => {
     
        return (
          log["Author Name"] === text ||
          log["Issue Name"] === text
        );
      
    })
    .filter((logArray) => logArray.length > 0); // Remove empty sub-arrays
}

export async function getWorklogByProject(project: string): Promise<Worklogs[][]> {
  const logs = await getWorklogs();
  return logs.filter((log) => {
    return log.filter((lg) => {
      return lg.Worklog.issue.issueName === project;
    });
  });
}

export function getUserWorklogDictionary(): WorklogDictionary[] {
  const users = this.getUsers();
  const initWorklogDictionary = createUserWorklogObjects(users);
  // ToDO: mock-worklogs should be generated from the same data source as users so id's match
  const worklogs = this.getWorklogs();
  const worklogDictionary = mapWorklogData(initWorklogDictionary, worklogs);
  // await saveJsonToFile(users, 'employees.json');
  /// await convertWorklogDictionaryToCsvAndSave(worklogDictionary, 'DRC-Finance-Sample.csv');
  return worklogDictionary;
}

export function generateAvatarUrls(): AvatarUrls {
  return {
    '48x48': faker.image.avatar(),
    '24x24': faker.image.avatar(),
    '16x16': faker.image.avatar(),
    '32x32': faker.image.avatar(),
  };
}

function generateMockUsers(count: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const user: User = {
      self: faker.internet.url(),
      accountId: faker.string.uuid(),
      accountType: faker.string.fromCharacters(['atlassian', 'app']),
      emailAddress: faker.internet.email(),
      avatarUrls: generateAvatarUrls(),
      displayName: faker.person.fullName(),
      active: faker.datatype.boolean(),
      locale: faker.location.timeZone(),
    };

    users.push(user);
  }

  return users;
}

function generateUUID(number: number): string[] {
  const uuids: string[] = [];
  for (let i = 0; i < number; i++) {
    uuids.push(faker.string.uuid());
  }
  return uuids;
}
export function generateMockWorklog(number: number): Worklog[] {
  const userList = generateMockUsers(number);
  const logs: Worklog[] = [];
  userList.forEach((user) => {
    const log: Worklog = {
      self: faker.internet.url(),
      tempoWorklogId: faker.number.int(),
      department: faker.lorem.word(),
      departmentLedgerCode: faker.lorem.word(),
      issue: {
        self: faker.internet.url(),
        id: faker.number.int(),
        issueName: faker.lorem.words(),
      },
      accountId: faker.string.uuid(),
      accountName: faker.lorem.word(),
      timeSpentSeconds: faker.number.int({ min: 600, max: 7200 }), // Random time between 10 minutes and 2 hours
      billableSeconds: faker.number.int({ min: 600, max: 7200 }),
      issueStartDate: faker.date.recent().toISOString().split('T')[0], // Random recent date in YYYY-MM-DD format
      loggedTime: generateRandomTime(),
      loggedDate: faker.date.recent().toISOString().split('T')[0],
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      author: {
        avatar: user.avatarUrls['24x24'],
        self: faker.internet.url(),
        userID: user.accountId,
        displayName: faker.person.fullName(),
      },
    };
    logs.push(log);
  });
  return logs;
}

function generateRandomTime(): string {
  const hours = faker.number.int({ min: 0, max: 23 });
  const minutes = faker.number.int({ min: 0, max: 59 });
  const seconds = faker.number.int({ min: 0, max: 59 });

  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function generateMockFilteredData(): IFilteredData {
  return {
    id: faker.string.uuid(),
    key: faker.string.numeric(10),
    parent: faker.datatype.boolean() ? faker.string.uuid() : null, // Randomly decide if there's a parent or not
  };
}

function generateMockFilteredWorklog(): FilteredWorklog {
  const worklog: Worklog = generateMockWorklog(1)[0];
  return {
    issue: generateMockFilteredData(),
    worklog: worklog,
    parent: faker.datatype.boolean() ? faker.string.uuid() : null,
  };
}

function generateMockFilteredWorklogData(count: number): FilteredWorklogData[] {
  const worklogs: FilteredWorklogData[] = [];

  for (let i = 0; i < count; i++) {
    const filteredWorklogData: FilteredWorklogData = {
      logDate: faker.date.recent().toISOString().split('T')[0],
      worklog: generateMockFilteredWorklog(),
    };

    worklogs.push(filteredWorklogData);
  }

  return worklogs;
}

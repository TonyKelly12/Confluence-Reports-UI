import { WorklogDictionary, FilteredWorklogData, User } from "../interfaces/interfaces";
export declare function createUserWorklogObjects(users: User[]): WorklogDictionary[];
export declare function mapWorklogData(userWorklogsDict: WorklogDictionary[], worklogs: FilteredWorklogData[]): WorklogDictionary[];

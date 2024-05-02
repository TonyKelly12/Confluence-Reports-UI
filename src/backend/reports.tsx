import { WorklogDictionary, FilteredWorklogData, User} from "./interfaces";


export function createUserWorklogObjects(users: User[]) {
    const userWorklogsDict: WorklogDictionary[] = users.map((user) => {
        return {
            userId: user.accountId,
            displayName: user.displayName,
            worklogs: [],
        };
    });
    return userWorklogsDict;
  }

export function mapWorklogData(userWorklogsDict: WorklogDictionary[], worklogs: FilteredWorklogData[]) {
    worklogs.map((worklog) => {
        // Todo: (Code Cleanup) Refactor interface to not have worklog.worklog.worklog
        const userWorklogDict = userWorklogsDict.find((userWorklogDict) => userWorklogDict.userId === worklog.worklog.worklog.author.userID);
        if (userWorklogDict) {

            userWorklogDict.worklogs.push(worklog.worklog);
        }
    });
    console.log('userWorklogsDict', userWorklogsDict);
    return userWorklogsDict;
  }
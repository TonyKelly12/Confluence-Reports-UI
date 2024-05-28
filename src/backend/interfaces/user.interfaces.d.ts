import { ApplicationRoles, Groups } from "./issue.interfaces";
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

export declare function getWorklogByDateRange(startDate: string, endDate: string): void;
export declare function getWorklogByUser(displayName: string): void;
export declare const head: {
    cells: ({
        key: string;
        content: string;
        isSortable?: undefined;
    } | {
        key: string;
        content: string;
        isSortable: boolean;
    })[];
};
export declare const rows: {
    key: string;
    cells: ({
        key: any;
        content: string;
    } | {
        key: any;
        content: number;
    })[];
}[];

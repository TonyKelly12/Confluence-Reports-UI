
export interface Metadata {
    count: number;
    offset: number;
    limit: number;
  }
  
  
  
  export interface JiraResponseBase {
    self: string;
    metadata: Metadata;
  }
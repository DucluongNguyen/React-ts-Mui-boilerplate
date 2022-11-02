//* Common interface
export interface List<T> extends Array<T> {
  [index: number]: T;
}

export interface ResponseGenerator<T = any> {
  config?: any;
  data?: T;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface ResponsePagination<T> {
  data: T;
  totalPage: number;
  totalRecord: number;
  message: string;
  status?: number;
}

export enum LinkP {
  HOME = "Home",
  LOGIN = "Login",
  DASHBOARD = "Dashboard",
  ABOUT = "About",
}

export interface RouteP {
  path?: string;
  exact?: boolean;
  component: React.FC;
  name: string;
  isPrivate?: boolean;
}

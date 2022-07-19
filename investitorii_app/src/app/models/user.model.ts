export interface User {
  uid: string;
  email: string;
  displayName?: string;
  defaultPassword: boolean,
  roles?: string[];
}

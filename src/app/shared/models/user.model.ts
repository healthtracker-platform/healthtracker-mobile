import {Role} from "../../core/role.model";

export interface User {
  id?: string;
  email?: string;
  firstName?: string;
  familyName?: string;
  sex?: any;
  password?: string;
  active?: boolean;
  role?: Role;
}

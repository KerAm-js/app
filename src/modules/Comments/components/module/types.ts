import { IUser } from "../../../../types/User";

export interface ICommentsModuleProps {
  user: IUser
  userRole: 'addressee' | 'author',
}

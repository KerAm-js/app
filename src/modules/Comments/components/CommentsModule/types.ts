import { IUser } from "../../../../types/User";

export interface ICommentsModuleProps {
  user: IUser
  userRole: 'adressee' | 'author',
}

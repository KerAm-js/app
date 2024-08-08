import { IUser } from "../../../../types/User";

export interface ICommentsModuleProps extends Pick<IUser, "id"> {
  isMyComments?: boolean
}

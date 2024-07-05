import { IUser } from "../../../../types/User";

export interface IAdvertCommentProps {
  comment?: string;
  userId: IUser["id"];
}

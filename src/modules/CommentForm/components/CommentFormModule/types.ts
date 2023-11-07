import { IComment } from "../../../../types/Comment";
import { IUser } from "../../../../types/User";

export interface ICommentFormModuleProps
  extends Pick<IUser, "id" | "username"> {
    defaultComment?: IComment,
  }

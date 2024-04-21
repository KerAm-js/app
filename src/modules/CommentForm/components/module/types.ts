import { IComment } from "../../../../types/Comment";

export interface ICommentFormModuleProps
  extends Pick<IComment, "addresseeId" | "addresseeName"> {
    defaultComment?: IComment,
  }

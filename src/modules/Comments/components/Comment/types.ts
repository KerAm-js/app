import { IComment } from "../../../../types/Comment";

export interface ICommentProps extends IComment {
  isMyComments?: boolean;
}

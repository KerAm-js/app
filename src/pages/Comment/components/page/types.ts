import { IComment } from "../../../../types/Comment";
import { IUser } from "../../../../types/User";

export interface ICommentPageProps  {
  addresseeName: string,
  addresseeId: string,
  defaultComment?: IComment,
}
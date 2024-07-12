import { IComment } from "../../../../types/Comment";

export interface ICommentPageProps  {
  addresseeName: string,
  addresseeId: number,
  defaultComment?: IComment,
}
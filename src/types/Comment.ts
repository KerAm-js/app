export interface IComment {
  id: number;
  authorId: number;
  authorName: string;
  addresseeId: number;
  addresseeName: string;
  rate: number;
  text: string;
}
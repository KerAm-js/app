export interface IComment {
  id: string;
  authorId: string;
  authorName: string;
  addresseeId: string;
  addresseeName: string;
  rate: number;
  text: string;
}
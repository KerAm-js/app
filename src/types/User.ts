import { IComment } from "./Comment";

export interface IUser {
  id: string;
  phone: string;
  username: string;
  email: string;
  description: string;
  rating: number;
  ratesCount: number;
  comments: Array<IComment>;
  adverts: Array<any>;
  avatar?: string;
};
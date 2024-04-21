export interface IUser {
  id: string;
  phone: string;
  username: string;
  email: string;
  description: string;
  rating: number;
  ratesCount: number;
  comments: Array<string>;
  adverts: Array<string>;
  avatar?: string;
}



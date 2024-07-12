export interface IUser {
  id: number;
  phone: string;
  username: string;
  email: string;
  description: string;
  rating: number;
  ratesCount: number;
  likes: Array<string>;
  comments: Array<string>;
  adverts: Array<string>;
  avatar?: string;
}



export interface IUser {
  phone: string;
  username: string;
  email: string;
  rating: number;
  ratesCount: number;
  comments: Array<any>;
  adverts: Array<any>;
  avatar?: string;
};
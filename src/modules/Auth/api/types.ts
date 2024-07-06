import { IUser } from "../../../types/User";

export interface IRegisterRequest
  extends Pick<IUser, "email" | "username" | "phone" | "description"> {
  password: string;
}

export interface IRegisterResponse
  extends Pick<IUser, "email" | "username" | "phone"> {
  id: string;
}

export interface ILogInRequest extends Pick<IUser, "email"> {
  password: string;
}

export interface ILogInResponse {
  token: string;
}

export interface IError {
  title: string;
  message: string;
}

export interface IGetUserByTokenResponse
  extends Pick<
  IUser,
  | "id"
  | "username"
  | "phone"
  | "description"
  | "email"
  | "rating"
  | "ratesCount"
> {}

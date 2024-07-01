import axios from "axios";
import { API_URL } from "../../../api/api";
import {
  IGetUserByTokenResponse,
  ILogInRequest,
  ILogInResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "./types";
import { IUser } from "../../../types/User";

const register = (
  userData: IRegisterRequest
): Promise<{ data: IRegisterResponse }> => {
  return axios.post<IRegisterResponse>(`${API_URL}/sign_up`, userData);
  // return new Promise((resolve) => {
  //   setTimeout(
  //     () =>
  //       resolve({
  //         data: {
  //           email: "test@mail.com",
  //           id: "3",
  //           phone: "+7 928 123-45-67",
  //           username: "Kerimov Industries",
  //         },
  //       }),
  //     2000
  //   );
  // });
};

const logIn = (credentials: ILogInRequest) => {
  return axios.post<ILogInResponse>(`${API_URL}/auth`, credentials);
};

const getUserByToken = (token: string) => {
  return axios.get<IGetUserByTokenResponse>(`${API_URL}/secured/current-user/user`, {headers: {'Authorization': `Bearer ${token}`}});
};

const getUserLikesByToken = (token: string) => {
  return axios.get<IUser["likes"]>(`${API_URL}/secured/current-user/likes`, {headers: {'Authorization': `Bearer ${token}`}});
}

const getUserCommentsByToken = (token: string) => {
  return axios.get<IUser["comments"]>(`${API_URL}/secured/current-user/comments`, {headers: {'Authorization': `Bearer ${token}`}});
}

export const authApi = {
  logIn,
  register,
  getUserByToken,
  getUserLikesByToken,
  getUserCommentsByToken
};

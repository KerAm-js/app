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
};

const logIn = async (credentials: ILogInRequest) => {
  return axios.post<ILogInResponse>(`${API_URL}/auth`, credentials);
};

const getUserByToken = async (token: string) => {
  return axios.get<IGetUserByTokenResponse>(
    `${API_URL}/secured/current-user/user`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

const getUserLikesByToken = (token: string) => {
  return axios.get<IUser["likes"]>(`${API_URL}/secured/current-user/likes`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const getUserCommentsByToken = (token: string) => {
  return axios.get<IUser["comments"]>(
    `${API_URL}/secured/current-user/comments`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const authApi = {
  logIn,
  register,
  getUserByToken,
  getUserLikesByToken,
  getUserCommentsByToken,
};

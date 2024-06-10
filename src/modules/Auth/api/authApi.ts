import axios from "axios";
import { API_URL } from "../../../api/api";
import {
  ILogInRequest,
  ILogInResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "./types";

const register = (
  userData: IRegisterRequest
): Promise<{ data: IRegisterResponse }> => {
  // return axios.post<IRegisterResponse>(`${API_URL}/sign_up`, userData);
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          data: {
            email: "test@mail.com",
            id: "3",
            phone: "+7 928 123-45-67",
            username: "Kerimov Industries",
          },
        }),
      2000
    );
  });
};

const logIn = (credentials: ILogInRequest) => {
  return axios.post<ILogInResponse>(`${API_URL}/auth`, credentials);
};

export const authApi = {
  logIn,
  register,
};

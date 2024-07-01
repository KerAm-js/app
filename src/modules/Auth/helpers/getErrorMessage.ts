import { AxiosError, isAxiosError } from "axios";
import { IError } from "../api/types";

export const getErrorMessage = (error: unknown | any): IError => {
  let title = `Неизвестная ошибка`;
  let message =
    "Пожалуйста, обратитесь в службу поддержки или повторите попытку позже";
  if (isAxiosError(error)) {
    const code = error.response?.status;
    if (code) {
      title = `Ошибка: код ${error.response?.status}`;
      if (code === 401) {
        title = error.response?.data.message;
        message = "Пожалуйста, проверьте данные и повторите попытку";
      } else if (code >= 400 && code < 500) {
        message =
          "Возможно, вы ввели данные некорректно. Пожалуйста, проверьте данные и повторите попытку";
      } else if (code >= 500) {
        message =
          "Возможно, на сервере ведутся технические работы. Пожалуйста, повторите попытку позже";
      }
    }
    if (error.code === AxiosError.ERR_NETWORK) {
      title = "Нет подключения к интернету";
      message = "Пожалуйста, проверьте соединение и повторите попытку";
    }
  }
  return { title, message };
};

import { api } from "../../../api/api";
import { IUser } from "../../../types/User";

const supportApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    
    sendMessage: builder.mutation<
      { email, phone, platformOs, username, message },
      string
    >({
      query: (body) => {
        const botToken = '8037806986:AAHnBYnduQvC3R0lH9NZyps5WPPdNaqDbIU'; // Токен вашего бота
        const chatId = '-4765005702'; // ID вашей группы
        const text = `
        email: ${body.email},
Номер телефона: ${body.phone},
Платформа: ${body.platformOs},
Никнейм: ${body.username},
Сообщение: ${body.message},
        `;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        return {
        url,
        method: "POST",
        body: {
          chat_id: chatId,
          text: text,
        },
      }},
    }),
  }),
});

export const {useSendMessageMutation} =
  supportApi;

import { IUser } from "../../../types/User";

export const filterUsers = (users: Array<IUser>, searchText: string) => {
  const text = searchText.trim().toLowerCase();
  if (!text) return [];
  return users.filter((user) => {
    if (isNaN(Number(text)) && text.slice(0, 2) !== "+7") {
      return user.username.toLowerCase().includes(text);
    } else {
      const phone = user.phone.replaceAll(/[-\ ]/g, "");
      return phone.includes(text);
    }
  });
};

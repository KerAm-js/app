import { IUser } from "../../../types/User";

export const filterUsers = (users: Array<IUser>, searchText: string) => {
  return users.filter((user) => {
    const text = searchText.trim().toLowerCase();
    if (isNaN(Number(text)) && text.slice(0, 2) !== "+7") {
      return user.username.toLowerCase().includes(text);
    } else {
      const phone = user.phone.replaceAll(/[-\ ]/g, "");
      return phone.includes(text);
    }
  });
};

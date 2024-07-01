import { IUser } from "../../../../types/User";

export interface ICommentsModuleProps {
  user: Pick<
    IUser,
    | "id"
    | "username"
    | "phone"
    | "email"
    | "description"
    | "rating"
    | "ratesCount"
  >;
  userRole: "addressee" | "author";
}

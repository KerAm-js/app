import { RootState } from "./../../store/store";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const state = useSelector((state: RootState) => state.auth);
  return state;
};

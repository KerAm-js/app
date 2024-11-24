import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const useAdvertFilters = () => {
  const filters = useSelector((state: RootState) => state.filter);
  return filters;
};

export const useDumpAdvertFilter = () => {
  const filter = useSelector((state: RootState) => state.filter.dump);
  return filter;
};

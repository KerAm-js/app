import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { selectAddressByMapPoints } from "./selectors";

export const useAddressByMap = () => {
  const data = useSelector((state: RootState) => state.addressByMap);
  return data;
};

export const useAddressByMapPoints = () => {
  const data = useSelector(selectAddressByMapPoints);
  return data;
};

export const useAddressByMapDistance = () => {
  const data = useSelector((state: RootState) => state.addressByMap.distance);
  return data;
};

export const useAddressByMapIsSecondPointRequired = () => {
  const data = useSelector(
    (state: RootState) => state.addressByMap.isSecondPointRequired
  );
  return data;
};

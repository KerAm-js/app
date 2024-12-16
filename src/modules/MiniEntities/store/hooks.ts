import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const useTechnicTypes = () => {
  const result = useSelector(
    (state: RootState) => state.miniEntities.technicTypes
  );
  return result;
};

export const useMaterialTypes = () => {
  const result = useSelector(
    (state: RootState) => state.miniEntities.materialTypes
  );
  return result;
};

export const useDumpTransports = () => {
  const result = useSelector(
    (state: RootState) => state.miniEntities.dumpTransports
  );
  return result;
};

export const useWasteTypes = () => {
  const result = useSelector(
    (state: RootState) => state.miniEntities.wasteTypes
  );
  return result;
};
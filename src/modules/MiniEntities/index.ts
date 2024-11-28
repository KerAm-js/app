export * as miniEntitiesActions from "./store/miniEntitiesActions";
export { miniEntitesSlice } from "./store/miniEntitiesSlice";
export type {
  ITechnicType,
  IMaterialType,
  IDumpTransportType,
  TEquipment,
  TFraction,
  TParameter,
} from "./api/types";
export {
  useDumpTransports,
  useMaterialTypes,
  useTechnicTypes,
} from "./store/hooks";

import { IDumpTransportType, IMaterialType, ITechnicType } from "../api/types";

export interface IMiniEntitesSlice {
  technicTypes: ITechnicType[];
  materialTypes: IMaterialType[];
  dumpTransports: IDumpTransportType[];
}

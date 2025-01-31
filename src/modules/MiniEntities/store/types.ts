import { IDumpTransportType, IMaterialType, ITechnicType, IWasteType } from "../../../types/MiniEntities";

export interface IMiniEntitesSlice {
  wasteTypes: IWasteType[];
  technicTypes: ITechnicType[];
  materialTypes: IMaterialType[];
  dumpTransports: IDumpTransportType[];
}

import axios from "axios";
import { API_URL } from "../../../api/api";
import { IDumpTransportType, IMaterialType, ITechnicType } from "../../../types/MiniEntities";

export const getTechnicTypes = () => {
  return axios.get<ITechnicType[]>(`${API_URL}/technic-type-lib/all`);
};

export const getMaterialTypes = () => {
  return axios.get<IMaterialType[]>(`${API_URL}/material-type/all`);
};

export const getDumpTransports = () => {
  return axios.get<IDumpTransportType[]>(`${API_URL}/transport-lib/all`);
};

export const getWasteTypes = () => {
  return axios.get(`${API_URL}/waste-type-lib/all`)
}

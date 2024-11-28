import axios from "axios";
import { API_URL } from "../../../api/api";
import { IMaterialType, ITechnicType, IDumpTransportType } from "./types";

export const getTechnicTypes = () => {
  return axios.get<ITechnicType[]>(`${API_URL}/technic-type-lib/all`);
};

export const getMaterialTypes = () => {
  return axios.get<IMaterialType[]>(`${API_URL}/material-type/all`);
};

export const getDumpTransports = () => {
  return axios.get<IDumpTransportType[]>(`${API_URL}/transport-lib/all`);
};

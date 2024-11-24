import { api } from "../../../api/api";
import { IMiniAdvert } from "../../../types/Advert";
import { TDumpFilter } from "../store/types";

export type TEquipment = { id: number; name: string };
export type TParameter = { id: number; name: string };
export type TFraction = { id: number; name: string };

export interface ITechnicType {
  id: number;
  name: string;
  equipments: Array<TEquipment>;
  parameters: Array<TParameter>;
}

export interface ITransportType {
  id: number;
  name: string;
}

export interface IMaterialType {
  id: number;
  name: string;
  fractions: Array<TFraction>;
}

export interface UploadImageToAdvertPayload {
  image: {
    uri: string;
    name: string;
    type: string;
  };
  advert_type: string;
  order_id: string;
}

interface GetImageNamesByOrderIdParams {
  order_id: string;
  advert_type: string;
}

interface GetImageResponse {
  url: string;
}

export const postAdvertApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTechnicAdvertsMiniFiltered: builder.query<Array<IMiniAdvert>, {}>({
      query: () => ({
        url: "/advert-technic/mini/all/filtered",
        method: "POST",
        body: {},
      }),
      providesTags: ["TechnicAdverts"],
    }),
    getMaterialAdvertsMiniFiltered: builder.query<Array<IMiniAdvert>, {}>({
      query: () => ({
        url: "/advert-material/mini/all/filtered",
        method: "POST",
        body: {},
      }),
      providesTags: ["MaterialAdverts"],
    }),
    getDumpAdvertsMiniFiltered: builder.query<Array<IMiniAdvert>, TDumpFilter>({
      query: (filter) => ({
        url: "/advert-dump/mini/all/filtered",
        method: "POST",
        body: filter,
      }),
      providesTags: ["DumpAdverts"],
    }),
  }),
});

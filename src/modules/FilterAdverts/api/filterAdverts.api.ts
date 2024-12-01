import { api } from "../../../api/api";
import {
  IDumpAdvert,
  IMaterialAdvert,
  IMiniAdvert,
  ITechnicAdvert,
} from "../../../types/Advert";
import { TDumpFilter, TMaterialFilter, TTechnicFilter } from "../store/types";

export interface UploadImageToAdvertPayload {
  image: {
    uri: string;
    name: string;
    type: string;
  };
  advert_type: string;
  order_id: string;
}

export const filterAdvertApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTechnicAdvertsMiniFiltered: builder.query<
      Array<IMiniAdvert>,
      TTechnicFilter
    >({
      query: (filter) => ({
        url: "/advert-technic/mini/all/filtered",
        method: "POST",
        body: filter,
      }),
      providesTags: ["TechnicAdverts"],
    }),
    getTechnicAdvertsFiltered: builder.query<
      Array<ITechnicAdvert>,
      TTechnicFilter
    >({
      query: (filter) => ({
        url: "/advert-technic/all/filtered",
        method: "POST",
        body: filter,
      }),
      providesTags: ["TechnicAdverts"],
    }),
    getMaterialAdvertsMiniFiltered: builder.query<
      Array<IMiniAdvert>,
      TMaterialFilter
    >({
      query: (filter) => ({
        url: "/advert-material/mini/all/filtered",
        method: "POST",
        body: filter,
      }),
      providesTags: ["MaterialAdverts"],
    }),
    getMaterialAdvertsFiltered: builder.query<
      Array<IMaterialAdvert>,
      TMaterialFilter
    >({
      query: (filter) => ({
        url: "/advert-material/all/filtered",
        method: "POST",
        body: filter,
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
    getDumpAdvertsFiltered: builder.query<Array<IDumpAdvert>, TDumpFilter>({
      query: (filter) => ({
        url: "/advert-dump/all/filtered",
        method: "POST",
        body: filter,
      }),
      providesTags: ["DumpAdverts"],
    }),
  }),
});

export const {
  useGetTechnicAdvertsMiniFilteredQuery,
  useGetTechnicAdvertsFilteredQuery,
  useGetDumpAdvertsMiniFilteredQuery,
  useGetDumpAdvertsFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsFilteredQuery,
} = filterAdvertApi;

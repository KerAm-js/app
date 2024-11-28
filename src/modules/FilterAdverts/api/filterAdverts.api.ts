import { api } from "../../../api/api";
import { IMiniAdvert } from "../../../types/Advert";
import { TDumpFilter } from "../store/types";

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

export const {
  useGetTechnicAdvertsMiniFilteredQuery,
  useGetDumpAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
} = filterAdvertApi;

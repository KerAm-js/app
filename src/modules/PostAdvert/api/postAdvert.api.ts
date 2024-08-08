import { api } from "../../../api/api";

export interface ITechnicType {
  id: number;
  name: string;
  equipments: Array<{ id: number; name: string }>;
  parameters: Array<{ id: number; name: string }>;
}

export interface ITransportType {
  id: number;
  name: string;
}

export interface IMaterialType {
  id: number;
  name: string;
  fractions: Array<{ id: number; name: string }>;
}

export const postAdvertApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTechnicTypesByLetter: builder.query<Array<ITechnicType>, string>({
      query: (text) => ({
        url: `/technic-type-lib/${text}`,
      }),
    }),
    getTransportByLetter: builder.query<Array<ITransportType>, string>({
      query: (text) => ({
        url: `/transport-lib/${text}`,
      }),
    }),
    getMaterialTypeByLetter: builder.query<Array<IMaterialType>, string>({
      query: (text) => ({
        url: `/material-type/by-letter/${text}`,
      }),
    }),
  }),
});

export const {
  useGetTechnicTypesByLetterQuery,
  useGetTransportByLetterQuery,
  useGetMaterialTypeByLetterQuery,
} = postAdvertApi;

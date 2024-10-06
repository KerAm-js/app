import { api } from "../../../api/api";
import {
  DumpAdvertDto,
  IAdvert,
  MaterialAdvertDto,
  TechnicAdvertDto,
} from "../../../types/Advert";

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
    addTechnicAdvert: builder.mutation<
      IAdvert,
      {
        advert: TechnicAdvertDto;
        token: string;
      }
    >({
      query: ({ advert, token }) => ({
        url: "/secured/advert-technic/new",
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: advert,
      }),
    }),
    addMaterialAdvert: builder.mutation<
      IAdvert,
      { advert: MaterialAdvertDto; token: string }
    >({
      query: ({ advert, token }) => ({
        url: "/secured/advert-material/new",
        method: "POST",
        body: advert,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    getTechnicAdvertsByUser: builder.query<string, Array<IAdvert>>({
      query: (userId) => ({
        url: `/advert-technic/all/${userId}`,
      }),
    }),
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
    uploadImageToAdvert: builder.mutation<void, FormData>(
      {
        query: (formData) => ({
          url: "/secured/upload-image/advert",
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      }
    ),
    getImageNamesByOrderId: builder.query<
      string[],
      GetImageNamesByOrderIdParams
    >({
      query: ({ order_id, advert_type }) => ({
        url: "/adverts/images/get",
        method: "GET",
        params: {
          order_id,
          advert_type,
        },
      }),
    }),
    getImage: builder.query<GetImageResponse, string>({
      query: (imageId) => ({
        url: `/fileSystem/${imageId}`,
        method: "GET",
        headers: {
          Authorization: "Bearer YOUR_TOKEN_HERE", // Замените на ваш токен
        },
      }),
    }),
  }),
});

export const {
  useAddTechnicAdvertMutation,
  useAddMaterialAdvertMutation,
  useGetTechnicAdvertsByUserQuery,
  useGetTechnicTypesByLetterQuery,
  useGetTransportByLetterQuery,
  useGetMaterialTypeByLetterQuery,
  useUploadImageToAdvertMutation,
  useGetImageNamesByOrderIdQuery,
  useGetImageQuery,
} = postAdvertApi;

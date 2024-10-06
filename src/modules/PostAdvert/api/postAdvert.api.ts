import { api } from "../../../api/api";
import {
  DumpAdvertDto,
  IAdvert,
  MaterialAdvertDto,
  TAdvertType,
  TechnicAdvertDto,
} from "../../../types/Advert";
import { IImage } from "../../../UI/inputs/Photo/types";

interface FormDataValue {
  uri: string;
  name: string;
  type: string;
}

interface FormData {
  append(
    name: string,
    value: string | Blob | FormDataValue,
    fileName?: string
  ): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(
    name: string,
    value: string | Blob | FormDataValue,
    fileName?: string
  ): void;
}

declare let FormData: {
  prototype: FormData;
  new (form?: HTMLFormElement): FormData;
};

interface FormData {
  entries(): IterableIterator<[string, string | File]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string | File>;
  forEach(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<string | File>;
}

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
          Authorization: `Bearer ${token}`,
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
    addDumpAdvert: builder.mutation<
      IAdvert,
      { advert: DumpAdvertDto; token: string }
    >({
      query: ({ advert, token }) => ({
        url: "/secured/advert-dump/new",
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
    uploadImageToAdvert: builder.mutation<
      string,
      {
        image: IImage;
        advertType: TAdvertType;
        advertId: IAdvert["id"];
        token: string;
      }
    >({
      query: ({ image, advertType, advertId, token }) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("advert_type", advertType);
        formData.append("order_id", advertId.toString());
        return {
          url: "/secured/upload-image/advert",
          method: "POST",
          body: formData,
          formData: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          responseHandler: "text",
        };
      },
    }),
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
  useAddDumpAdvertMutation,
  useGetTechnicAdvertsByUserQuery,
  useGetTechnicTypesByLetterQuery,
  useGetTransportByLetterQuery,
  useGetMaterialTypeByLetterQuery,
  useUploadImageToAdvertMutation,
  useGetImageNamesByOrderIdQuery,
  useGetImageQuery,
} = postAdvertApi;

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
  editTechnicAdvert: builder.mutation<
  IAdvert,
  {
    advert: any;
    token: string;
  }
>({
  query: ({ advert, token }) => {

    return ({
    url: "/secured/advert-technic/upd",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: advert,
  })},
  onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
    try {
      const { data } = await queryFulfilled; // ожидаем выполнение запроса
      console.log('Response data:', data); // выводим данные из ответа
    } catch (error) {
      console.error('Error occurred:', error);
    }
  },
  transformResponse: (response, meta, arg) => {
    // Если сервер возвращает строку "Advert Updated", но нам нужно вернуть сам объект advert
    if (typeof response === "string" && response === "Advert Updated") {
      return arg.advert; // возвращаем переданный advert
    }
    // Если сервер возвращает данные в другом формате, можно адаптировать код.
    return response; 
  },
  invalidatesTags: ['User', 'TechnicAdverts'],
}),
editDumpAdvert: builder.mutation<
  IAdvert,
  {
    advert: any;
    token: string;
  }
>({
  query: ({ advert, token }) => {

    return ({
    url: "/secured/advert-dump/upd",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: advert,
  })},
  onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {

    try {
      const { data } = await queryFulfilled; // ожидаем выполнение запроса
      console.log('Response data:', data); // выводим данные из ответа
    } catch (error) {
      console.error('Error occurred:', error);
    }
  },
  transformResponse: (response, meta, arg) => {
    // Если сервер возвращает строку "Advert Updated", но нам нужно вернуть сам объект advert
    if (typeof response === "string" && response === "Advert Updated") {
      return arg.advert; // возвращаем переданный advert
    }
    // Если сервер возвращает данные в другом формате, можно адаптировать код.
    return response; 
  },
  invalidatesTags: ['User', 'DumpAdverts'],
}),

editMaterialAdvert: builder.mutation<
  IAdvert,
  {
    advert: any;
    token: string;
  }
>({
  query: ({ advert, token }) => {

    return ({
    url: "/secured/advert-material/upd",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: advert,
  })},
  onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {

    try {
      const { data } = await queryFulfilled; // ожидаем выполнение запроса
      console.log('Response data:', data); // выводим данные из ответа
    } catch (error) {
      console.error('Error occurred:', error);
    }
  },
  transformResponse: (response, meta, arg) => {

    return arg.advert; // возвращаем переданный advert
  
  },
  invalidatesTags: ['User', 'MaterialAdverts'],
}),
getAdvertImages: builder.mutation<
      string,
      {
        advertType: TAdvertType;
        advertId: IAdvert["id"];
        token: string;
      }
    >({
      query: ({ advertId, advertType }) => ({
        url: "/adverts/images/get",
        method: "GET",
        params: {
          order_id: advertId,
          advert_type: advertType,
        },
      }),
    }),
  deleteAdvertImage: builder.mutation<
  string,
  {
    fileName: any;
    advertType: any;
    advertId: any;
    token: string;
  }
>({
  query: ({ fileName, advertType, advertId, token }) => {
    const formData = new FormData();
    formData.append("file_name", fileName);
    formData.append("advert_type", advertType);
    formData.append("advert_id", String(advertId));

    return ({
    url: "/secured/delete-image",
    method: "DELETE",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
    formData: true
  })},
  invalidatesTags: ['Images']

}),
  }),
});

export const {
  useEditTechnicAdvertMutation,
  useEditDumpAdvertMutation,
  useEditMaterialAdvertMutation,
  useGetAdvertImagesMutation,
  useDeleteAdvertImageMutation

} = postAdvertApi;

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
    console.log('jhb')
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
    console.log(arg)
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
    console.log(arg)
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
  }),
});

export const {
  useEditTechnicAdvertMutation,
  useEditDumpAdvertMutation,
  useEditMaterialAdvertMutation

} = postAdvertApi;
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
      invalidatesTags: ['User', 'TechnicAdverts']
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
      invalidatesTags: ['User', 'MaterialAdverts']
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
      invalidatesTags: ['User', 'DumpAdverts']
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
      invalidatesTags: ['Images']
    }),
  }),
});

export const {
  useAddTechnicAdvertMutation,
  useAddMaterialAdvertMutation,
  useAddDumpAdvertMutation,
  useUploadImageToAdvertMutation,
} = postAdvertApi;

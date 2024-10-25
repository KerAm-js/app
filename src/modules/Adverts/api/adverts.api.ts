import { api } from "../../../api/api";
import { IAdvert } from "../../../types/Advert";
import { IUser } from "../../../types/User";

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
    getLikesByAdvertId: builder.query<
      Array<IUser>,
      Pick<IAdvert, "advertType" | "id">
    >({
      query: ({ id, advertType }) => ({
        url: `/likes/all-by-advert`,
        params: {
          advertType,
          advertId: id,
        },
      }),
    }),
    getTechnicAdvertsByUser: builder.query<Array<IAdvert>, IUser["id"]>({
      query: (userId) => ({
        url: `/advert-technic/all/${userId}`,
      }),
    }),
    getTechnicAdvertsPageable: builder.query<
      Array<IAdvert>,
      { from: number; size: number }
    >({
      query: ({ from, size }) => ({
        url: `/advert-technic/all/pageable`,
        params: {
          from,
          size,
        },
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
    }),
    getMaterialAdvertsByUser: builder.query<Array<IAdvert>, IUser["id"]>({
      query: (userId) => ({
        url: `/advert-material/all/${userId}`,
      }),
    }),
    getMaterialAdvertsPageable: builder.query<
      Array<IAdvert>,
      { from: number; size: number }
    >({
      query: ({ from, size }) => ({
        url: `/advert-material/all/pageable`,
        params: {
          from,
          size,
        },
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
    }),
    getDumpAdvertsByUser: builder.query<Array<IAdvert>, IUser["id"]>({
      query: (userId) => ({
        url: `/advert-dump/all/${userId}`,
      }),
    }),
    getDumpAdvertsPageable: builder.query<
      Array<IAdvert>,
      { from: number; size: number }
    >({
      query: ({ from, size }) => ({
        url: `/advert-dump/all/pageable`,
        params: {
          from,
          size,
        },
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
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
  useGetLikesByAdvertIdQuery,
  useGetTechnicAdvertsByUserQuery,
  useGetTechnicAdvertsPageableQuery,
  useGetDumpAdvertsByUserQuery,
  useGetDumpAdvertsPageableQuery,
  useGetMaterialAdvertsByUserQuery,
  useGetMaterialAdvertsPageableQuery,
  useGetImageNamesByOrderIdQuery,
  useGetImageQuery,
} = postAdvertApi;

import { api } from "../../../api/api";
import { IAdvert } from "../../../types/Advert";
import { IUser } from "../../../types/User";
import { PAGINATION_SIZE } from "./consts";

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
      providesTags: ['Likes']
    }),
    getTechnicAdvertById: builder.query<IAdvert, IAdvert["id"]>({
      query: (id) => ({
        url: `/advert-technic/${id}`,
      }),
    }),
    getTechnicAdvertsByUser: builder.query({
      query: ({token, status}) => ({
        url: `/secured/current-user/advert-technic/${status}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
    }),
    getTechnicAdvertsPageable: builder.query<Array<IAdvert>, number>({
      query: (from) => ({
        url: `/advert-technic/all/pageable`,
        params: {
          from,
          size: PAGINATION_SIZE,
        },
      }),
      providesTags: ['TechnicAdverts'],
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch(params) {
        return params.currentArg !== 0 && params.currentArg !== params.previousArg
      },
    }),
    getMaterialAdvertById: builder.query<IAdvert, IAdvert["id"]>({
      query: (id) => ({
        url: `/advert-material/${id}`,
      }),
    }),
    getMaterialAdvertsByUser: builder.query({
      query: ({token, status}) => ({
        url: `/secured/current-user/advert-material/${status}`,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
    }),
    getMaterialAdvertsPageable: builder.query<Array<IAdvert>, number>({
      query: (from) => ({
        url: `/advert-material/all/pageable`,
        params: {
          from,
          size: PAGINATION_SIZE,
        },
      }),
      providesTags: ["MaterialAdverts"],
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch(params) {
        return params.currentArg !== 0 && params.currentArg !== params.previousArg
      },
    }),
    getDumpAdvertById: builder.query<IAdvert, IAdvert["id"]>({
      query: (id) => ({
        url: `/advert-dump/${id}`,
      }),
    }),
    getDumpAdvertsByUser: builder.query({
      query: ({token, status}) => {
        return ({
        url: `/secured/current-user/advert-dump/${status}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })},
    }),
    getDumpAdvertsPageable: builder.query<Array<IAdvert>, number>({
      query: (from) => ({
        url: `/advert-dump/all/pageable`,
        params: {
          from,
          size: PAGINATION_SIZE,
        },
      }),
      providesTags: ["DumpAdverts"],
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch(params) {
        return params.currentArg !== 0 && params.currentArg !== params.previousArg
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
      providesTags: ["Images"],
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
  useGetTechnicAdvertByIdQuery,
  useGetDumpAdvertsByUserQuery,
  useGetDumpAdvertsPageableQuery,
  useGetDumpAdvertByIdQuery,
  useGetMaterialAdvertsByUserQuery,
  useGetMaterialAdvertsPageableQuery,
  useGetMaterialAdvertByIdQuery,
  useGetImageNamesByOrderIdQuery,
  useGetImageQuery,
} = postAdvertApi;

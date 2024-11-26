import { postAdvertApi } from "./api/filterAdverts.api";
export { FilterAdvertsModule } from "./components/module/FilterAdvertsModule";
export const {
  useGetTechnicAdvertsMiniFilteredQuery,
  useGetDumpAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
} = postAdvertApi;

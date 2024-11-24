import { postAdvertApi } from "./api/filterAdverts.api";
export { FilterAdvertsModule } from "./components/module/FilterAdvertsModule";
export { useDumpAdvertFilter } from "./store/hooks";
export const {
  useGetTechnicAdvertsMiniFilteredQuery,
  useGetDumpAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
} = postAdvertApi;

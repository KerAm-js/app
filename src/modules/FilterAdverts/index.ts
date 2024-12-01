export {
  useGetTechnicAdvertsMiniFilteredQuery,
  useGetTechnicAdvertsFilteredQuery,
  useGetDumpAdvertsMiniFilteredQuery,
  useGetDumpAdvertsFilteredQuery,
  useGetMaterialAdvertsMiniFilteredQuery,
  useGetMaterialAdvertsFilteredQuery,
} from "./api/filterAdverts.api";
export { FilterAdvertsModule } from "./components/module/FilterAdvertsModule";
export type {
  TTechnicFilter,
  TMaterialFilter,
  TDumpFilter,
} from "./store/types";

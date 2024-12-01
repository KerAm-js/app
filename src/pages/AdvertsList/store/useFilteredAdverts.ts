import {
  useGetDumpAdvertsFilteredQuery,
  useGetMaterialAdvertsFilteredQuery,
  useGetTechnicAdvertsFilteredQuery,
} from "../../../modules/FilterAdverts";
import { useAdvertFilters } from "../../../modules/FilterAdverts/store/hooks";
import { IAdvert, TAdvertType } from "../../../types/Advert";

type TParams = {
  advertType: TAdvertType;
};

export const useFilteredAdverts = ({ advertType }: TParams) => {
  const {
    dump: dumpAdvertFilter,
    material: materialAdvertFilter,
    technic: technicAdvertFilter,
  } = useAdvertFilters();

  const {
    data: technicAdvertsFiltered,
    isLoading: isTechnicAdvertsFilteredLoading,
  } = useGetTechnicAdvertsFilteredQuery(technicAdvertFilter || {}, {
    skip: advertType !== "TECHNIC" || !technicAdvertFilter,
  });

  const {
    data: materialAdvertsFiltered,
    isLoading: isMaterialAdvertsFilteredLoading,
  } = useGetMaterialAdvertsFilteredQuery(materialAdvertFilter || {}, {
    skip: advertType !== "NON_MATERIAL" || !materialAdvertFilter,
  });

  const { data: dumpAdvertsFiltered, isLoading: isDumpAdvertsFilteredLoading } =
    useGetDumpAdvertsFilteredQuery(dumpAdvertFilter || {}, {
      skip: advertType !== "DUMP" || !dumpAdvertFilter,
    });

  let data: IAdvert[] | undefined;
  let isLoading = false;
  let isFilter = false;

  switch (advertType) {
    case "TECHNIC":
      data = technicAdvertsFiltered;
      isLoading = isTechnicAdvertsFilteredLoading;
      isFilter = !!technicAdvertFilter;
      break;

    case "DUMP":
      data = dumpAdvertsFiltered;
      isLoading = isDumpAdvertsFilteredLoading;
      isFilter = !!dumpAdvertFilter;
      break;

    case "NON_MATERIAL":
      data = materialAdvertsFiltered;
      isLoading = isMaterialAdvertsFilteredLoading;
      isFilter = !!materialAdvertFilter;
      break;
  }

  return { data, isLoading, isFilter };
};

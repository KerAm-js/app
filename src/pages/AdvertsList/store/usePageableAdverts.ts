import {
  useGetDumpAdvertsPageableQuery,
  useGetMaterialAdvertsPageableQuery,
  useGetTechnicAdvertsPageableQuery,
} from "../../../modules/Adverts/api/adverts.api";
import { IAdvert, TAdvertType } from "../../../types/Advert";
import { useState } from "react";
import { PAGINATION_SIZE } from "../../../modules/Adverts/api/consts";

type TParams = {
  advertType: TAdvertType;
  skip: boolean;
};

export const usePageableAdverts = ({
  advertType,
  skip,
}: TParams) => {
  const [from, setFrom] = useState(0);



  const {
    data: technicAdverts,
    isLoading: isTechnicAdvertsLoading,
    isFetching: isTechnicAdvertsFetching,
  } = useGetTechnicAdvertsPageableQuery(from, {
    skip: advertType !== "TECHNIC" || skip,
  });

  const {
    data: materialAdverts,
    isLoading: isMaterialAdvertsLoading,
    isFetching: isMaterialAdvertsFetching,
  } = useGetMaterialAdvertsPageableQuery(from, {
    skip: advertType !== "NON_MATERIAL" || skip,
  });

  const {
    data: dumpAdverts,
    isLoading: isDumpAdvertsLoading,
    isFetching: isDumpAdvertsFetching,
  } = useGetDumpAdvertsPageableQuery(from, {
    skip: advertType !== "DUMP" || skip,
  });

  let data: IAdvert[] | undefined;
  let isLoading = false;
  let isFetching = false;

  switch (advertType) {
    case "TECHNIC":
      data = technicAdverts;
      isLoading = isTechnicAdvertsLoading;
      isFetching = isTechnicAdvertsFetching;
      break;

    case "DUMP":
      data = dumpAdverts;
      isLoading = isDumpAdvertsLoading;
      isFetching = isDumpAdvertsFetching;
      break;

    case "NON_MATERIAL":
      data = materialAdverts;
      isLoading = isMaterialAdvertsLoading;
      isFetching = isMaterialAdvertsFetching;
      break;
  }

  const incrementPage = () => {
    if (data && data.length > 0) {
      setFrom(Math.ceil(data?.length / PAGINATION_SIZE));
    }
  };

  return { data, isLoading, isFetching, incrementPage };
};

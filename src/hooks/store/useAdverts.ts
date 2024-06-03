import { TAdvertType } from "./../../types/Advert";
import { useMemo } from "react";
import { RootState } from "./../../store/store";
import { useSelector } from "react-redux";
import { USER } from "../../consts/devData";

export const useAdverts = (type: TAdvertType) => {
  const adverts = useSelector((state: RootState) => state.adverts);
  const filtered = useMemo(
    // () => adverts.filter((ad) => ad.type === type && ad.userId !== USER.id),
    () => adverts.filter((ad) => ad.type === type),
    [adverts, type]
  );
  return filtered;
};

export const useFilteredAdverts = (type: TAdvertType) => {
  const {adverts, filter} = useSelector((state: RootState) => state);
  const filtered = useMemo(
    () => adverts.filter((ad) => ad.type === type && ad.userId !== USER.id),
    [adverts, type]
  );
  return filtered;
};

export const useUserAdverts = (userId: string) => {
  const adverts = useSelector((state: RootState) => state.adverts);
  const filtered = useMemo(
    () => adverts.filter((ad) => ad.userId === userId),
    [adverts]
  );
  return filtered;
};

import { TAdvertType } from "./../../types/Advert";
import { useMemo } from "react";
import { RootState } from "./../../store/store";
import { useSelector } from "react-redux";
import { useAuth } from "./useAuth";

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
  const { adverts, filter } = useSelector((state: RootState) => state);
  const { user } = useAuth();
  const filtered = useMemo(
    () =>
      adverts.filter((ad) => ad.type === type && ad.userId !== user?.id),
    [adverts, type]
  );
  return filtered;
};

export const useUserAdverts = (userId: number) => {
  const adverts = useSelector((state: RootState) => state.adverts);
  const filtered = useMemo(
    () => adverts.filter((ad) => ad.userId === userId),
    [adverts]
  );
  return filtered;
};

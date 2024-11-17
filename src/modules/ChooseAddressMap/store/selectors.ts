import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

export const selectAddressByMapPoints = createSelector(
  [
    (state: RootState) => state.addressByMap.point,
    (state: RootState) => state.addressByMap.secondPoint,
  ],
  (point, secondPoint) => ({ point, secondPoint })
);

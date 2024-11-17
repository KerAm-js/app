import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAddressByMapState } from "./types";

const initialState: TAddressByMapState = {
  isSecondPointRequired: false,
};

export const addressByMapSlice = createSlice({
  name: "addressByMap",
  initialState,
  reducers: {
    setIsSecondPointRequired: (state, action: PayloadAction<boolean>) => {
      state.isSecondPointRequired = action.payload;
    },
    setPoint: (state, action: PayloadAction<TAddressByMapState["point"]>) => {
      state.point = action.payload;
      state.pointAddress = undefined;
    },
    setPointAddress: (state, action: PayloadAction<string>) => {
      state.pointAddress = action.payload;
    },
    changePointToSecondPoint: (state) => {
      console.log(state.secondPoint);
      state.point = state.secondPoint ? { ...state.secondPoint } : undefined;
      state.pointAddress = undefined;
      state.secondPoint = undefined;
      state.secondPointAddress = undefined;
      state.distance = undefined;
    },
    setSecondPoint: (
      state,
      action: PayloadAction<
        Pick<TAddressByMapState, "secondPoint" | "distance">
      >
    ) => {
      state.secondPoint = action.payload.secondPoint;
      state.secondPointAddress = undefined;
      state.distance = action.payload.distance;
    },
    setSecondPointAddress: (state, action: PayloadAction<string>) => {
      state.secondPointAddress = action.payload;
    },
    setAddressByMapDefaults: () => {
      return initialState;
    },
  },
});

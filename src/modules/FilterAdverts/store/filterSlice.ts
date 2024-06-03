import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TDumpFilter,
  TFilterState,
  TMaterialFilter,
  TTechnicFilter,
} from "./types";

const initialState: TFilterState = {
  technic: undefined,
  dump: undefined,
  material: undefined,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTechnicFilter: (
      state,
      {
        payload: filterObj,
      }: PayloadAction<TTechnicFilter>
    ) => {
      state.technic = filterObj;
    },
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

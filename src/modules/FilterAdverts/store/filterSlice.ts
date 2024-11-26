import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TDumpFilter, TFilterState, TMaterialFilter, TTechnicFilter } from "./types";

const initialState: TFilterState = {
  technic: undefined,
  dump: undefined,
  material: undefined,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTechnicFilter: (state, action: PayloadAction<TTechnicFilter>) => {
      state.technic = action.payload;
    },
    setDumpFilter: (state, action: PayloadAction<TDumpFilter>) => {
      state.dump = action.payload;
    },
    setMaterialFilter: (state, action: PayloadAction<TMaterialFilter>) => {
      state.material = action.payload;
    },
    resetDumpFilter: (state) => {
      state.dump = undefined;
    },
    resetTechnicFilter: (state) => {
      state.technic = undefined;
    },
    resetMaterialFilter: (state) => {
      state.material = undefined;
    },
  },
});

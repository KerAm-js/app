import { createSlice } from "@reduxjs/toolkit";
import {
  getDumpTransportsThunk,
  getMaterialTypesThunk,
  getTechnicTypesThunk,
} from "./miniEntitiesActions";
import { IMiniEntitesSlice } from "./types";

const initialState: IMiniEntitesSlice = {
  technicTypes: [],
  materialTypes: [],
  dumpTransports: [],
};

export const miniEntitesSlice = createSlice({
  name: "miniEntites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTechnicTypesThunk.fulfilled, (state, action) => {
      state.technicTypes = action.payload;
    });
    builder.addCase(getMaterialTypesThunk.fulfilled, (state, action) => {
      state.materialTypes = action.payload;
    });
    builder.addCase(getDumpTransportsThunk.fulfilled, (state, action) => {
      state.dumpTransports = action.payload;
    });
  },
});

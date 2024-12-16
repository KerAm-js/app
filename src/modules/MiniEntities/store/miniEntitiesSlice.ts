import { createSlice } from "@reduxjs/toolkit";
import {
  getDumpTransportsThunk,
  getMaterialTypesThunk,
  getTechnicTypesThunk,
  getWasteTypesThunk,
} from "./miniEntitiesActions";
import { IMiniEntitesSlice } from "./types";

const initialState: IMiniEntitesSlice = {
  technicTypes: [],
  materialTypes: [],
  dumpTransports: [],
  wasteTypes: []
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
    builder.addCase(getWasteTypesThunk.fulfilled, (state, action) => {
      state.wasteTypes = action.payload
    })
  },
});

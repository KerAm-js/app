import { handleError } from "../../Auth/helpers/getErrorMessage";
import {
  getDumpTransports,
  getMaterialTypes,
  getTechnicTypes,
} from "../api/miniEntities.api";
import {
  IDumpTransportType,
  IMaterialType,
  ITechnicType,
} from "../api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTechnicTypesThunk = createAsyncThunk<
  ITechnicType[],
  undefined,
  { rejectValue: string }
>("miniEntities/technicTypes", async (_, thunkApi) => {
  try {
    const response = await getTechnicTypes();
    if (response.status === 200) {
      return response.data;
    }
    return thunkApi.rejectWithValue(handleError(""));
  } catch (error) {
    return thunkApi.rejectWithValue(handleError(error));
  }
});

export const getMaterialTypesThunk = createAsyncThunk<
  IMaterialType[],
  undefined,
  { rejectValue: string }
>("miniEntities/materialTypes", async (_, thunkApi) => {
  try {
    const response = await getMaterialTypes();
    if (response.status === 200) {
      return response.data;
    }
    return thunkApi.rejectWithValue(handleError(""));
  } catch (error) {
    return thunkApi.rejectWithValue(handleError(error));
  }
});

export const getDumpTransportsThunk = createAsyncThunk<
  IDumpTransportType[],
  undefined,
  { rejectValue: string }
>("miniEntities/dumpTransports", async (_, thunkApi) => {
  try {
    const response = await getDumpTransports();
    if (response.status === 200) {
      return response.data;
    }
    return thunkApi.rejectWithValue(handleError(""));
  } catch (error) {
    return thunkApi.rejectWithValue(handleError(error));
  }
});

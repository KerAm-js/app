import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { usersSlice } from "../../modules/SearchUsers/store/usersSlice";
import { filterSlice } from "../../modules/FilterAdverts/store/filterSlice";
import * as authActions from "../../modules/Auth/store/authActions";
import { authSlice } from "../../modules/Auth/store/authSlice";
import { addressByMapSlice } from "../../modules/ChooseAddressMap/store/addressByMapSlice";
import { miniEntitiesActions } from "../../modules/MiniEntities";

const actions = {
  ...usersSlice.actions,
  ...filterSlice.actions,
  ...authActions,
  ...authSlice.actions,
  ...addressByMapSlice.actions,
  ...miniEntitiesActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

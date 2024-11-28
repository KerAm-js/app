import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { usersSlice } from "../../modules/SearchUsers/store/usersSlice";
import { filterSlice } from "../../modules/FilterAdverts/store/filterSlice";
import * as authActions from "../../modules/Auth/store/authActions";
import * as likesActions from "../../modules/Like/store/likesActions";
import { authSlice } from "../../modules/Auth/store/authSlice";
import { addressByMapSlice } from "../../modules/ChooseAddressMap/store/addressByMapSlice";
import { likesSlice } from "../../modules/Like/store/likesSlice";
import { miniEntitiesActions } from "../../modules/MiniEntities";

const actions = {
  ...usersSlice.actions,
  ...filterSlice.actions,
  ...authActions,
  ...authSlice.actions,
  ...addressByMapSlice.actions,
  ...likesSlice.actions,
  ...likesActions,
  ...miniEntitiesActions
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { advertsSlice } from "../../modules/Adverts/store/advertsSlice";
import { usersSlice } from "../../modules/SearchUsers/store/usersSlice";
import { commemtsSlice } from "../../modules/Comments/store/commentsSlice";
import { filterSlice } from "../../modules/FilterAdverts/store/filterSlice";
import * as authActions from "../../modules/Auth/store/authActions";
import { authSlice } from "../../modules/Auth/store/authSlice";

const actions = {
  ...advertsSlice.actions,
  ...usersSlice.actions,
  ...commemtsSlice.actions,
  ...filterSlice.actions,
  ...authActions,
  ...authSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

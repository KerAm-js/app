import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { advertsActions } from "../../modules/Adverts/store/advertsSlice";
import { usersActions } from "../../modules/SearchUsers/store/usersSlice";
import { commentsActions } from "../../modules/Comments/store/commentsSlice";
import { filterActions } from "../../modules/FilterAdverts/store/filterSlice";

const actions = {
  ...advertsActions,
  ...usersActions,
  ...commentsActions,
  ...filterActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

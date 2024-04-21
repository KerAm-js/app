import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { advertsActions } from "../../modules/Adverts/store/advertsSlice";
import { usersActions } from "../../modules/SearchUsers/store/usersSlice";
import { commentsActions } from "../../modules/Comments/store/commentsSlice";

const actions = {
  ...advertsActions,
  ...usersActions,
  ...commentsActions
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};

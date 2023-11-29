import { ICommentsModuleProps } from "../modules/Comments/components/CommentsModule/types";
import { IAwaitingCommentPageProps } from "../pages/AwaitingComment/components/page/types";
import { ICommentPageProps } from "../pages/Comment/components/types";
import { IModalProps } from "../pages/Modal/components/page/types";
import { IMyAdvertsPageProps } from "../pages/MyAdverts/components/page/types";
import { IMyCommentsPageProps } from "../pages/MyComments/components/MyCommentsPage/types";
import { TAdvert } from "../types/Advert";
import { IUser } from "../types/User";

export interface IAnimatedHeaderComponentProps {
  scrollY?: {value: number};
}

export type RootStackParamList = {
  Main: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Auth: undefined;
  Register: undefined;
  User: IUser;
  UserSearch: undefined;
  MyComments: IMyCommentsPageProps;
  MyAdverts: IMyAdvertsPageProps;
  CommentsToMe: IMyCommentsPageProps;
  Comment: ICommentPageProps;
  Modal: IModalProps;
  Advert: TAdvert;
  AwaitingComment: IAwaitingCommentPageProps;
  UserComments: ICommentsModuleProps;
  NewComment: IUser;
};

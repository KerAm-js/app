import { ICommentsModuleProps } from "../modules/Comments/components/module/types";
import { TAdvertPagePropTypes } from "../pages/Advert/components/page/types";
import { IAwaitingCommentPageProps } from "../pages/AwaitingComment/components/page/types";
import { IChooseAdvertTypePageProps } from "../pages/ChooseAdvertType/components/page/types";
import { ICommentPageProps } from "../pages/Comment/components/page/types";
import { IMyCommentsPageProps } from "../pages/MyComments/components/MyCommentsPage/types";
import { IAdvert } from "../types/Advert";
import { IComment } from "../types/Comment";
import { IUser } from "../types/User";

export interface IAnimatedHeaderComponentProps {
  scrollY?: { value: number };
}

export type RootStackParamList = {
  Main: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Auth: undefined;
  Register: undefined;
  User: Pick<
    IUser,
    | "id"
    | "username"
    | "phone"
    | "email"
    | "description"
    | "rating"
    | "ratesCount"
  >;
  UserSearch: undefined;
  MyComments: IMyCommentsPageProps;
  MyAdverts: undefined;
  DeletedAdverts: undefined;
  CommentsToMe: IMyCommentsPageProps;
  Comment: ICommentPageProps;
  Modal: IAdvert;
  Advert: TAdvertPagePropTypes;
  AwaitingComment: IAwaitingCommentPageProps;
  UserComments: ICommentsModuleProps;
  NewComment: Pick<IComment, "addresseeId" | "addresseeName">;
  ChooseAdvertType: IChooseAdvertTypePageProps;
  AdvertsList: Pick<IAdvert, "advertType">;
  NewAdvert: Pick<IAdvert, "advertType">;
  AdvertImages: Pick<IAdvert, "id" | "advertType"> & { isPhotosRequired: boolean };
  Filter: Pick<IAdvert, "advertType">;
};

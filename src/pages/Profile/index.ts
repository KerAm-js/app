import AvatarBlock from "./components/AvatarBlock/AvatarBlock";
import EditProfileButton from "./components/EditProfileButton/EditProfileButton";
import Component from "./components/page/ProfilePage";
import UserInfo from "./components/UserInfo/UserInfo";

const ProfilePage = {
  Component,
  headerRight: EditProfileButton,
  UserInfo,
  AvatarBlock,
};

export default ProfilePage;

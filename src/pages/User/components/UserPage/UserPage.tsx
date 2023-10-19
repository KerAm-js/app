import { FC } from "react";
import { ScrollView } from "react-native";
import { IUser } from "../../../../types/User";
import { ProfilePage } from "../../../Profile";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsList from "../AdvertsList/AdvertsList";

const UserPageComponent: FC<IUser> = (props) => {
  return (
    <ScrollView style={userPageStyles.container}>
      <ProfilePage.AvatarBlock />
      <ProfilePage.UserInfo {...props} />
      <Comments />
      <AdvertsList data={props.adverts} />
    </ScrollView>
  );
};

export default UserPageComponent;

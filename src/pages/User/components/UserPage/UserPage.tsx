import { FC } from "react";
import { View } from "react-native";
import { IUser } from "../../../../types/User";
import { ProfilePage } from "../../../Profile";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsList from "../AdvertsListHeader/AdvertsListHeader";
import AdvertsModule from "../../../../modules/Adverts";

const UserPageComponent: FC<IUser> = (props) => {
  return (
    <AdvertsModule.Component
      style={userPageStyles.container}
      ListHeaderComponent={
        <View>
          <ProfilePage.AvatarBlock />
          <ProfilePage.UserInfo {...props} />
          <Comments />
          <AdvertsList dataLength={props.adverts.length} />
        </View>
      }
      data={props.adverts}
    />
  );
};

export default UserPageComponent;

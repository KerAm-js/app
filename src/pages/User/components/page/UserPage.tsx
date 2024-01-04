import { FC } from "react";
import { View } from "react-native";
import { IUser } from "../../../../types/User";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsModule from "../../../../modules/Adverts";
import ProfilePage from "../../../Profile";

const UserPageComponent: FC<IUser> = (user) => {
  return (
    <AdvertsModule.Component
      style={userPageStyles.container}
      ListHeaderComponent={
        <View>
          <ProfilePage.AvatarBlock />
          <ProfilePage.UserInfo {...user} />
          <Comments {...user} />
          <AdvertsModule.Header dataLength={user.adverts.length} />
        </View>
      }
      data={user.adverts}
    />
  );
};

export default UserPageComponent;

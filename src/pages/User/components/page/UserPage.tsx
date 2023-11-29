import { FC } from "react";
import { View } from "react-native";
import { IUser } from "../../../../types/User";
import { ProfilePage } from "../../../Profile";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsModule from "../../../../modules/Adverts";

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

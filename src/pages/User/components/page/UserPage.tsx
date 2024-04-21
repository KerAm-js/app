import { FC } from "react";
import { View } from "react-native";
import { IUser } from "../../../../types/User";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsModule from "../../../../modules/Adverts";
import ProfilePage from "../../../Profile";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const UserPageComponent: FC<IUser> = (user) => {
  const adverts = useSelector((state: RootState) => state.adverts);
  const filtered = adverts.filter((ad) => ad.userId === user.id);
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
      data={filtered}
    />
  );
};

export default UserPageComponent;

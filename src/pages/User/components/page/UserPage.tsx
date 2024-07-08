import { FC } from "react";
import { View } from "react-native";
import { IUser } from "../../../../types/User";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsModule from "../../../../modules/Adverts";
import ProfilePage from "../../../Profile";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useGetUserByIdQuery } from "../../../../modules/SearchUsers/api/users.api";

const UserPageComponent: FC<Pick<
IUser,
| "id"
| "username"
| "phone"
| "email"
| "description"
| "rating"
| "ratesCount"
>> = (user) => {
  return (
    <AdvertsModule.Component
      style={userPageStyles.container}
      ListHeaderComponent={
        <View>
          <ProfilePage.AvatarBlock userId={user.id} />
          <ProfilePage.UserInfo {...user} />
          {/* <Comments {...user} /> */}
          {/* <AdvertsModule.Header dataLength={user.adverts.length} /> */}
        </View>
      }
      data={[]}
    />
  );
};

export default UserPageComponent;

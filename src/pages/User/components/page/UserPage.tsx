import { FC, useEffect } from "react";
import { Alert, View } from "react-native";
import { IUser } from "../../../../types/User";
import { userPageStyles } from "./styles";
import Comments from "../Comments/Comments";
import AdvertsModule from "../../../../modules/Adverts";
import ProfilePage from "../../../Profile";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useGetUserByIdQuery } from "../../../../modules/SearchUsers/api/users.api";

const UserPageComponent: FC<
  Pick<
    IUser,
    | "id"
    | "username"
    | "phone"
    | "email"
    | "description"
    | "rating"
    | "ratesCount"
  >
> = (user) => {
  const { user: currentUser } = useAuth();
  const { data, error } = useGetUserByIdQuery({
    id: user.id,
  });

  useEffect(() => {
    if (error) Alert.alert("Что-то пошло не так");
  }, [error]);

  const userData = data ? { ...data } : { ...user };

  return (
    <AdvertsModule.Component
      style={userPageStyles.container}
      ListHeaderComponent={
        <View>
          <ProfilePage.AvatarBlock userId={userData.id} />
          <ProfilePage.UserInfo {...userData} />
          {currentUser?.id !== user.id && <Comments {...userData} />}
          {/* <AdvertsModule.Header dataLength={user.adverts.length} /> */}
        </View>
      }
      data={[]}
    />
  );
};

export default UserPageComponent;

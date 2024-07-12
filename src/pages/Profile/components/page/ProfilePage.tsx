import { ScrollView, RefreshControl, Alert } from "react-native";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import UserInfo from "../UserInfo/UserInfo";
import Navigation from "../Navigation/Navigation";
import { profilePageStyles } from "./styles";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useEffect, useState } from "react";
import { useActions } from "../../../../hooks/store/useActions";

const ProfilePageComponent = () => {
  const { user, isLoading, error, token } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const { getCurrentUserThunk } = useActions();

  useEffect(() => {
    if (!isLoading) setRefreshing(false);
  }, [isLoading]);

  useEffect(() => {
    if (error) Alert.alert("Что-то пошло не так");
  }, [error]);

  const onRefresh = () => {
    setRefreshing(true);
    if (token) getCurrentUserThunk(token);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={profilePageStyles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {user && (
        <>
          <AvatarBlock userId={user.id} />
          <UserInfo {...user} />
        </>
      )}
      <Navigation />
    </ScrollView>
  );
};

export default ProfilePageComponent;

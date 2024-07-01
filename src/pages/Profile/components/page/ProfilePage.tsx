import { ScrollView } from "react-native";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import UserInfo from "../UserInfo/UserInfo";
import Navigation from "../Navigation/Navigation";
import { profilePageStyles } from "./styles";
import { useAuth } from "../../../../hooks/store/useAuth";

const ProfilePageComponent = () => {
  const { user } = useAuth();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={profilePageStyles.container}
    >
      <AvatarBlock />
      {user && (
        <UserInfo
          {...user}
        />
      )}
      <Navigation />
    </ScrollView>
  );
};

export default ProfilePageComponent;

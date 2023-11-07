import { ScrollView } from "react-native";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import UserInfo from "../UserInfo/UserInfo";
import Navigation from "../Navigation/Navigation";
import { profilePageStyles } from "./styles";
import { USER } from "../../../../consts/devData";

const ProfilePageComponent = () => {
  return (
    <ScrollView style={profilePageStyles.container}>
      <AvatarBlock />
      <UserInfo
        {...USER}
        comments={[]} // navigate to comments button is in navigation
      />
      <Navigation />
    </ScrollView>
  );
};

export default ProfilePageComponent;

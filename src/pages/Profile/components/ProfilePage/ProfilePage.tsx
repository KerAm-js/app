import { ScrollView } from "react-native";
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import UserInfo from "../UserInfo/UserInfo";
import Navigation from "../Navigation/Navigation";
import { profilePageStyles } from "./styles";

const ProfilePageComponent = () => {
  return (
    <ScrollView style={profilePageStyles.container}>
      <AvatarBlock />
      <UserInfo
        username="ДунСтрой Групп"
        phone="8 928 123-45-67"
        email="email@mail.ru"
        rating={4.8}
        ratesCount={124}
      />
      <Navigation />
    </ScrollView>
  );
};

export default ProfilePageComponent;

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
        description="В данном блоке будет отображаться описание к странице пользователя. Описание может содержать до 400 символов."
        rating={4.7}
        ratesCount={124}
      />
      <Navigation />
    </ScrollView>
  );
};

export default ProfilePageComponent;

import { ScrollView } from "react-native"
import AvatarBlock from "../AvatarBlock/AvatarBlock";
import UserInfo from "../UserInfo/UserInfo";
import Navigation from "../Navigation/Navigation";

const ProfilePageComponent = () => {
  return <ScrollView>
    <AvatarBlock />
    <UserInfo />
    <Navigation />
  </ScrollView>
}

export default ProfilePageComponent;
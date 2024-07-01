import { View } from "react-native"
import Avatar from "../../../../UI/Avatar/Avatar";
import { avatarBlockStyles } from "./styles";
import { useAuth } from "../../../../hooks/store/useAuth";

const AvatarBlock = () => {
  return <View style={avatarBlockStyles.container}>
    <Avatar />
    <View style={avatarBlockStyles.backgroundElement}/>
  </View>
}

export default AvatarBlock;
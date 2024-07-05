import { View } from "react-native"
import Avatar from "../../../../UI/Avatar/Avatar";
import { avatarBlockStyles } from "./styles";
import { FC } from "react";
import { IUser } from "../../../../types/User";

const AvatarBlock: FC<{ userId: IUser['id'] }> = ({ userId }) => {
  return <View style={avatarBlockStyles.container}>
    <Avatar userId={userId} applyAvatarEdititing />
    <View style={avatarBlockStyles.backgroundElement}/>
  </View>
}

export default AvatarBlock;
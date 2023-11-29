import { Pressable, Text, View } from "react-native";
import Avatar from "../../UI/Avatar/Avatar";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../../assets/svg/arrowRight";
import { FC } from "react";
import { userCardStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { IUser } from "../../types/User";

const UserCard: FC<IUser> = (user) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("User", user);
  };
  return (
    <Pressable onPress={onPress} style={userCardStyles.container}>
      <View style={userCardStyles.userData}>
        <Avatar size={36} />
        <View>
          <Text style={userCardStyles.username}>{user.username}</Text>
          <Text style={userCardStyles.phone}>{user.phone}</Text>
        </View>
      </View>
      <SvgXml xml={arrowRightSvg()} width={14} height={14} />
    </Pressable>
  );
};

export default UserCard;

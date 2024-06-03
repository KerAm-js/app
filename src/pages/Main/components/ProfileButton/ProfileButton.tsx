 import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import HeaderButton from "../../../../navigation/components/HeaderButton/HeaderButton";
import { userSvg } from "../../../../assets/svg/user";

const ProfileButton: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <HeaderButton side="left" onPress={onPress} svgXml={userSvg()} />
  );
};

export default ProfileButton;
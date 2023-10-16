import { Pressable } from "react-native";
import { editSvg } from "../../../../assets/svg/edit";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";

const EditProfileButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable onPress={() => navigation.navigate("EditProfile")}>
      <SvgXml xml={editSvg()} width={22} height={22} />
    </Pressable>
  );
};

export default EditProfileButton;

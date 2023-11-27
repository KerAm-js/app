import { TouchableOpacity } from "react-native";
import { editSvg } from "../../../../assets/svg/edit";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { editProfileButtonStyles } from "./styles";

const EditProfileButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={editProfileButtonStyles.container} onPress={() => navigation.navigate("EditProfile")}>
      <SvgXml xml={editSvg()} width={18} height={18} />
    </TouchableOpacity>
  );
};

export default EditProfileButton;

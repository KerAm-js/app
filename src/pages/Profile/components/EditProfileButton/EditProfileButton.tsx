import { editSvg } from "../../../../assets/svg/edit";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import HeaderButton from "../../../../navigation/components/HeaderButton/HeaderButton";

const EditProfileButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <HeaderButton
      svgXml={editSvg()}
      onPress={() => navigation.navigate("EditProfile")}
      side="right"
    />
  );
};

export default EditProfileButton;

import { View } from "react-native";
import { profileNavigationStyles } from "./styles";
import ButtonsGroup from "../../../../UI/buttons/Group/ButtonsGroup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import BigButton from "../../../../UI/buttons/Big/BigButton";

const Navigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={profileNavigationStyles.container}>
      <ButtonsGroup
        data={[
          { title: "Мои отзывы", onPress: () => navigation.navigate("Auth") },
          { title: "Ждут оценки", onPress: () => navigation.navigate("Auth") },
          {
            title: "Отзывы обо мне",
            onPress: () => navigation.navigate("Auth"),
          },
        ]}
      />
      <ButtonsGroup
        data={[
          {
            title: "Найти пользователя",
            onPress: () => navigation.navigate("Auth"),
          },
        ]}
      />
      <ButtonsGroup
        data={[
          {
            title: "Мои объявления",
            onPress: () => navigation.navigate("Auth"),
          },
        ]}
      />
      <BigButton
        title="Разместить объявление"
        onPress={() => navigation.navigate("Auth")}
      />
    </View>
  );
};

export default Navigation;

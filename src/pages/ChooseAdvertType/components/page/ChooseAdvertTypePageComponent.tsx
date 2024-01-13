import { View } from "react-native";
import { chooseAdvertTypePageStyles } from "./styles";
import CardButton from "../../../../UI/buttons/Card/CardButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { TAdvertType } from "../../../../types/Advert";
import { FC } from "react";
import { IChooseAdvertTypePageProps } from "./types";

const ChooseAdvertTypePageComponent: FC<IChooseAdvertTypePageProps> = ({
  navigateTo,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = (type: TAdvertType) => {
    if (navigateTo === "adverts") {
      navigation.navigate("AdvertsList", { type });
    } else if (navigateTo === "filter") {
      navigation.navigate("Filter", { type });
    } else if (navigateTo === "form") {
      navigation.navigate("NewAdvert", { type });
    }
  };

  return (
    <View style={chooseAdvertTypePageStyles.container}>
      <CardButton
        type="technic"
        title="Техника"
        onPress={() => onPress("technic")}
      />
      <CardButton
        type="dump"
        title="Свалки"
        onPress={() => onPress("dump")}
      />
      <CardButton
        type="shovel"
        title="Нерудные материалы"
        onPress={() => onPress("shovel")}
      />
    </View>
  );
};

export default ChooseAdvertTypePageComponent;

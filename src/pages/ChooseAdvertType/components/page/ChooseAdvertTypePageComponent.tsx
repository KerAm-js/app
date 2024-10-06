import { View } from "react-native";
import { chooseAdvertTypePageStyles } from "./styles";
import CardButton from "../../../../UI/buttons/Card/CardButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { FC } from "react";
import { IChooseAdvertTypePageProps } from "./types";
import { IAdvert } from "../../../../types/Advert";

const ChooseAdvertTypePageComponent: FC<IChooseAdvertTypePageProps> = ({
  navigateTo,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = (advertType: IAdvert['advertType']) => {
    if (navigateTo === "adverts") {
      navigation.navigate("AdvertsList", { advertType });
    } else if (navigateTo === "filter") {
      navigation.navigate("Filter", { advertType });
    } else if (navigateTo === "form") {
      navigation.navigate("NewAdvert", { advertType });
    }
  };

  return (
    <View style={chooseAdvertTypePageStyles.container}>
      <CardButton
        type="TECHNIC"
        title="Техника"
        onPress={() => onPress("TECHNIC")}
      />
      <CardButton
        type="DUMP"
        title="Свалки"
        onPress={() => onPress("DUMP")}
      />
      <CardButton
        type="NON_MATERIAL"
        title="Нерудные материалы"
        onPress={() => onPress("NON_MATERIAL")}
      />
    </View>
  );
};

export default ChooseAdvertTypePageComponent;

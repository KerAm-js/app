import { View } from "react-native";
import { navBarStyles } from "./styles";
import NavButton from "../NavButton/NavButton";
import { userSvg } from "../../../../assets/svg/user";
import { filterSvg } from "../../../../assets/svg/filter";
import { listSvg } from "../../../../assets/svg/list";
import { FC } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import NavText from "../NavText/NavText";
import { RU_LANG } from "../../../../consts/rulang";

const NavBar: FC<{advertsCount: number}> = ({ advertsCount }) => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={[navBarStyles.container, { paddingTop: top < 15 ? 15 : top }]}>
      <NavText
        text={
          advertsCount === 0
            ? "Нет объявлений"
            : advertsCount +
              " " +
              (RU_LANG.adverts[advertsCount] || RU_LANG.adverts[0])
        }
      />
      <View style={navBarStyles.rightButtonsContainer}>
        <NavButton
          iconXml={userSvg()}
          onPress={() => navigation.navigate("Profile")}
        />
        <NavButton
          iconXml={listSvg()}
          onPress={() =>
            navigation.navigate("ChooseAdvertType", {
              title: "Объявления",
              navigateTo: "adverts",
            })
          }
        />
        <NavButton
          iconXml={filterSvg()}
          onPress={() =>
            navigation.navigate("ChooseAdvertType", {
              title: "Фильтр",
              navigateTo: "filter",
            })}
        />
      </View>
    </View>
  );
};

export default NavBar;

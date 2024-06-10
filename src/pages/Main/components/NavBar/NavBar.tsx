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
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const NavBar: FC = () => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const adverts = useSelector((state: RootState) => state.adverts)

  return (
    <View style={[navBarStyles.container, { paddingTop: top < 15 ? 15 : top }]}>
      <NavText
        text={
          adverts.length === 0
            ? "Нет объявлений"
            : adverts.length +
              " " +
              (RU_LANG.adverts[adverts.length] || RU_LANG.adverts[0])
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

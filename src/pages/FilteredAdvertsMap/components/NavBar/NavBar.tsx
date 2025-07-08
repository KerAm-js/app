import { View } from "react-native";
import { navBarStyles } from "./styles";
import NavButton from "../NavButton/NavButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { arrowLeftSvg } from "../../../../assets/svg/arrowLeft";
import { listSvg } from "../../../../assets/svg/list";
import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import { filterSvg } from "../../../../assets/svg/filter";
import { useActions } from "../../../../hooks/store/useActions";

const NavBar: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {
  const { top } = useSafeAreaInsets();
  const { resetDumpFilter, resetMaterialFilter, resetTechnicFilter } =
    useActions();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onGoBack = () => {
    resetDumpFilter();
    resetMaterialFilter();
    resetTechnicFilter();
    navigation.navigate("Main");
  };

  return (
    <View style={[navBarStyles.container, { paddingTop: top < 15 ? 15 : top }]}>
      <NavButton isBackButton iconXml={arrowLeftSvg()} onPress={onGoBack} />
      <View style={navBarStyles.rightButtonsContainer}>
        <NavButton
          iconXml={listSvg()}
          onPress={() =>
            navigation.navigate("AdvertsList", {
              advertType,
            })
          }
        />
        <NavButton
          iconXml={filterSvg()}
          onPress={() =>
            navigation.navigate("Filter", {
              advertType,
            })
          }
        />
      </View>
    </View>
  );
};

export default NavBar;

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

const NavBar: FC = () => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[navBarStyles.container, { paddingTop: top }]}>
      <NavButton
        iconXml={userSvg()}
        onPress={() => navigation.navigate("Profile")}
      />
      <View style={navBarStyles.rightButtonsContainer}>
        <NavButton iconXml={listSvg()} onPress={() => console.log("pressed")} />
        <NavButton
          iconXml={filterSvg()}
          onPress={() => console.log("pressed")}
        />
      </View>
    </View>
  );
};

export default NavBar;

import { View } from "react-native"
import { navBarStyles } from "./styles";
import NavButton from "../NavButton/NavButton";
import { userSvg } from "../../../../assets/svg/user";
import { filterSvg } from "../../../../assets/svg/filter";
import { listSvg } from "../../../../assets/svg/list";
import { FC } from "react";

const NavBar: FC = () => {
  return <View style={navBarStyles.container}>
    <NavButton iconXml={userSvg()} onPress={() => console.log('pressed')} />
    <View style={navBarStyles.rightButtonsContainer}>
      <NavButton iconXml={listSvg()} onPress={() => console.log('pressed')} />
      <NavButton iconXml={filterSvg()} onPress={() => console.log('pressed')} />
    </View>
  </View>
}

export default NavBar;
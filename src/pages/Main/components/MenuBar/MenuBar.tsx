import { View } from "react-native"
import MenuButton from "../MenuButton/MenuButton";
import { FC } from "react";
import { excavatorSvg } from "../../../../assets/svg/excavator";
import { shovelSvg } from "../../../../assets/svg/shovel";
import { dumpSvg } from "../../../../assets/svg/dump";
import { menuBarStyles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IMenuBarProps } from "./types";

const MenuBar: FC<IMenuBarProps> = ({advertType, setAdvertType}) => {
  const { bottom } = useSafeAreaInsets();
  return <View style={[menuBarStyles.container, {paddingBottom: bottom || 15}]}>
    {/* <MenuButton isActive={state === null} iconXmlFunc={allSvg} onPress={() => setState(null)} /> */}
    <MenuButton isActive={advertType === 'technic'} iconXmlFunc={excavatorSvg} onPress={() => setAdvertType('technic')} />
    <MenuButton isActive={advertType === 'material'} iconXmlFunc={shovelSvg} onPress={() => setAdvertType('material')} />
    <MenuButton isActive={advertType === 'dump'} iconXmlFunc={dumpSvg} onPress={() => setAdvertType('dump')} />
  </View>
}

export default MenuBar;
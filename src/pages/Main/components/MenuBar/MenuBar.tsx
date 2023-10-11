import { View } from "react-native"
import MenuButton from "../MenuButton/MenuButton";
import { FC, useState } from "react";
import { TAdvertType } from "../../../../types/Advert";
import { allSvg } from "../../../../assets/svg/all";
import { excavatorSvg } from "../../../../assets/svg/excavator";
import { shovelSvg } from "../../../../assets/svg/shovel";
import { dumpSvg } from "../../../../assets/svg/dump";
import { menuBarStyles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MenuBar: FC = () => {
  const [state, setState] = useState<TAdvertType | null>(null);
  const { bottom } = useSafeAreaInsets();
  return <View style={[menuBarStyles.container, {paddingBottom: bottom + 10}]}>
    <MenuButton isActive={state === null} iconXmlFunc={allSvg} onPress={() => setState(null)} />
    <MenuButton isActive={state === 'excavator'} iconXmlFunc={excavatorSvg} onPress={() => setState('excavator')} />
    <MenuButton isActive={state === 'shovel'} iconXmlFunc={shovelSvg} onPress={() => setState('shovel')} />
    <MenuButton isActive={state === 'dump'} iconXmlFunc={dumpSvg} onPress={() => setState('dump')} />
  </View>
}

export default MenuBar;
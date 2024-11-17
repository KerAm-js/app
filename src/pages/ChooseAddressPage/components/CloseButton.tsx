import { Pressable, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { BLACK_DARK, WHITE } from "../../../consts/colors";
import WithMapShadow from "../../../components/HOC/WithMapShadow/WithMapShadow";
import { arrowLeftSvg } from "../../../assets/svg/arrowLeft";
import { BORDER_RADIUS_SMALL } from "../../../consts/borders";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREEN_PADDING } from "../../../consts/views";

export const CloseButton = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  return (
    <Pressable
      onPress={navigation.goBack}
      hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
      style={[styles.container, { top: top < 15 ? 15 : top }]}
    >
      <SvgXml xml={arrowLeftSvg()} width={18} height={18} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
    justifyContent: "center",
    paddingLeft: 7,
    borderRadius: 30,
    backgroundColor: WHITE,
    shadowColor: BLACK_DARK,
    position: "absolute",
    left: SCREEN_PADDING,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    elevation: 10,
  },
});

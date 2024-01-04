import { navTextStyles } from "./styles";
import WihtMapShadow from "../../../../components/HOC/WithMapShadow/WithMapShadow";
import { Text, View } from "react-native";
import { INavTextProps } from "./types";

const NavText = WihtMapShadow<INavTextProps>(({ text }) => {
  return (
    <View style={navTextStyles.container}>
      <Text style={navTextStyles.text}>{text}</Text>
    </View>
  );
});

export default NavText;

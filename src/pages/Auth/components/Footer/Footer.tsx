import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { footerStyles } from "./styles";

const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={footerStyles.container}>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={footerStyles.button}>Регистрация</Text>
      </Pressable>
    </View>
  );
};

export default Footer;

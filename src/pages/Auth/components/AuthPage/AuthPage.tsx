import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { authPageStyles } from "./styles";
import Footer from "../Footer/Footer";
import { useHeaderHeight } from "@react-navigation/elements";
import AuthModule from "../../../../modules/Auth/components/AuthModule";

const AuthPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{ flex: 1 }}>
      <AuthModule />
      <Footer />
    </View>
  );
};

export default AuthPage;

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { authPageStyles } from "./styles";
import Footer from "../Footer/Footer";
import { useHeaderHeight } from "@react-navigation/elements";
import AuthModule from "../../../../modules/Auth/components/Auth";

const AuthPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight + 20}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={authPageStyles.container}>
        <AuthModule />
        <Footer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthPage;

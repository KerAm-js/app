import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import RegisterModule from "../../../../modules/Register/components/RegisterModule";
import { registerPageStyles } from "./styles";

const RegisterPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight + 20}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={registerPageStyles.container}>
        <RegisterModule />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterPage;


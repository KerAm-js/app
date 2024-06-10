import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { registerPageStyles } from "./styles";
import AuthModule from "../../../../modules/Auth";

const RegisterPageComponent = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={registerPageStyles.container}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={registerPageStyles.scrollView}>
        <AuthModule.Register />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterPageComponent;


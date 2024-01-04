import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { registerPageStyles } from "./styles";
import RegisterModule from "../../../../modules/Register";

const RegisterPageComponent = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={registerPageStyles.container}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={registerPageStyles.scrollView}>
        <RegisterModule.Component />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterPageComponent;


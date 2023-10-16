import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { registerPageStyles } from "./styles";
import { RegisterModule } from "../../../../modules/Register";

const RegisterPageComponent = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={registerPageStyles.container}>
        <RegisterModule.Component />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterPageComponent;


import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { supportPageStyles } from "./styles";
import { useHeaderHeight } from "@react-navigation/elements";
import SupportModule from "../../../../modules/Support";

const SupportPageComponent = (props) => {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      style={supportPageStyles.container}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={supportPageStyles.scrollView}>
        <SupportModule.Component props={props.route.params} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SupportPageComponent;
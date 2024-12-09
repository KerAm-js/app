import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { editAdvertPageStyles } from "./styles";
import { useHeaderHeight } from "@react-navigation/elements";
import EditAdvertModule from "../../../../modules/EditAdvert";

const EditAdvertPageComponent = (props) => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={editAdvertPageStyles.container}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={editAdvertPageStyles.scrollView}>
        <EditAdvertModule.Component props={props.route.params} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditAdvertPageComponent;

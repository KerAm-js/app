import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { editProfilePageStyles } from "./styles";
import { useHeaderHeight } from "@react-navigation/elements";
import EditProfileModule from "../../../../modules/EditProfile";

const EditProfilePageComponent = () => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={editProfilePageStyles.container}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={editProfilePageStyles.scrollView}>
        <EditProfileModule.Component />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfilePageComponent;

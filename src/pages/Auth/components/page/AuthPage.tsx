import { View } from "react-native";
import Footer from "../Footer/Footer";
import { authPageStyles } from "./styles";
import AuthModule from "../../../../modules/Auth";

const AuthPageComponent = () => {
  return (
    <View style={authPageStyles.container}>
      <AuthModule.Component />
      <Footer />
    </View>
  );
};

export default AuthPageComponent;

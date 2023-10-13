import { View } from "react-native";
import Footer from "../Footer/Footer";
import AuthModule from "../../../../modules/Auth/components/AuthModule";
import { authPageStyles } from "./styles";

const AuthPage = () => {
  return (
    <View style={authPageStyles.container}>
      <AuthModule />
      <Footer />
    </View>
  );
};

export default AuthPage;

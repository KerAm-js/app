import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "../pages/Main";
import AuthPage from "../pages/Auth";
import RegisterPage from "../pages/Register";
import { GREY_LIGHT } from "../consts/colors";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainPage.Component}
      />
      <Stack.Screen
        options={{
          title: "Вход",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="Auth"
        component={AuthPage.Component}
      />
      <Stack.Screen
        options={{
          title: "Регистрация",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="Register"
        component={RegisterPage.Component}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

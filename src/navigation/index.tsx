import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_DARK, GREY_LIGHT } from "../consts/colors";
import { MainPage } from "../pages/Main";
import { AuthPage } from "../pages/Auth";
import { ProfilePage } from "../pages/Profile";
import { RegisterPage } from "../pages/Register";
import { EditProfilePage } from "../pages/EditProfile";
import { navigationStyles } from "./styles";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: BLACK_DARK,
        headerStyle: navigationStyles.header,
        headerTitleStyle: navigationStyles.title
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={MainPage.Component}
      />
      <Stack.Screen
        options={{
          title: "Профиль",
          headerStyle: { backgroundColor: GREY_LIGHT },
          headerRight: ProfilePage.headerRight,
        }}
        name="Profile"
        component={ProfilePage.Component}
      />
      <Stack.Screen
        options={{
          title: "Редактирование",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="EditProfile"
        component={EditProfilePage.Component}
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

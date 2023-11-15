import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_DARK, GREY_DARK, GREY_LIGHT } from "../consts/colors";
import { MainPage } from "../pages/Main";
import { AuthPage } from "../pages/Auth";
import { ProfilePage } from "../pages/Profile";
import { RegisterPage } from "../pages/Register";
import { EditProfilePage } from "../pages/EditProfile";
import { navigationStyles } from "./styles";
import { UserSearchPage } from "../pages/UserSearch";
import { UserPage } from "../pages/User";
import { RootStackParamList } from "./types";
import MyComments from "../pages/MyComments";
import Comment from "../pages/Comment";
import MyAdverts from "../pages/MyAdverts";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: BLACK_DARK,
        headerStyle: navigationStyles.header,
        headerTitleStyle: navigationStyles.title,
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
          title: "Поиск пользователя",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="UserSearch"
        component={UserSearchPage.Component}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.username,
          headerStyle: { backgroundColor: GREY_LIGHT },
          headerRight: () => (
            <UserPage.headerRight phoneNumber={route.params.phone} />
          ),
        })}
        name="User"
      >
        {({ route }) => <UserPage.Component {...route.params} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          title: "Мои отзывы",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="MyComments"
      >
        {({ route }) => <MyComments.Component {...route.params} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          title: "Отзывы обо мне",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="CommentsToMe"
      >
        {({ route }) => <MyComments.Component {...route.params} />}
      </Stack.Screen>
      <Stack.Screen
        options={({ route }) => ({
          title: route.params.defaultComment ? "Редактирование" : "Новый отзыв",
          headerStyle: { backgroundColor: GREY_LIGHT },
        })}
        name="Comment"
      >
        {({ route }) => <Comment.Component {...route.params} />}
      </Stack.Screen>
      <Stack.Screen
        options={{
          title: "Мои объявления",
          headerStyle: { backgroundColor: GREY_LIGHT },
        }}
        name="MyAdverts"
      >
        {({ route }) => <MyAdverts.Component {...route.params} />}
      </Stack.Screen>
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

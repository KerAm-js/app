import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BLACK_DARK, GREY_LIGHT } from "../consts/colors";
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
import MyModal from "../pages/Modal";
import AdvertPage from "../pages/Advert";
import AnimatedHeaderBackground from "./components/HeaderBackground/HeaderBackground";
import AnimatedHeaderTitle from "./components/HeaderTitle/HeaderTitle";
import AnimatedHeaderBackButton from "./components/HeaderBack/HeaderBack";
import AwaitingComment from "../pages/AwaitingComment";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Group
        screenOptions={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleStyle: navigationStyles.title,
          headerLeft: () => <AnimatedHeaderBackButton />,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainPage.Component}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: GREY_LIGHT },
            headerRight: ProfilePage.headerRight,
            title: "Профиль",
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
            title: "Ждут оценки",
            headerStyle: { backgroundColor: GREY_LIGHT },
          }}
          name="AwaitingComment"
        >
          {({ route }) => <AwaitingComment.Component {...route.params} />}
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
            title: route.params.defaultComment
              ? "Редактирование"
              : "Новый отзыв",
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
          options={({ route }) => ({
            title:
              route.params.price.price +
              " руб за " +
              route.params.price.paymentFor,
            headerTransparent: true,
          })}
          name="Advert"
        >
          {({ route }) => <AdvertPage.Component {...route.params} />}
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
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="Modal">
          {({ route }) => <MyModal.Component {...route.params} />}
        </Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;

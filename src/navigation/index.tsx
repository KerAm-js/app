import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationStyles } from "./styles";
import UserSearchPage from "../pages/UserSearch";
import { RootStackParamList } from "./types";
import MyComments from "../pages/MyComments";
import CommentPage from "../pages/Comment";
import MyAdverts from "../pages/MyAdverts";
import MyModal from "../pages/Modal";
import AdvertPage from "../pages/Advert";
import AnimatedHeaderBackButton from "./components/HeaderBack/HeaderBack";
import AwaitingCommentPage from "../pages/AwaitingComment";
import UserCommentsPage from "../pages/UserComments";
import NewCommentPage from "../pages/NewComment";
import AdvertsListPage from "../pages/AdvertsList";
import { getAdvertTypeTitle } from "../helpers/advertTypeGetters";
import ChooseAdvertTypePage from "../pages/ChooseAdvertType";
import NewAdvertPage from "../pages/NewAdvert";
import MainPage from "../pages/Main";
import AuthPage from "../pages/Auth";
import EditProfilePage from "../pages/EditProfile";
import ProfilePage from "../pages/Profile";
import RegisterPage from "../pages/Register";
import UserPage from "../pages/User";
import FilterPage from "../pages/Filter";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Group
        screenOptions={{
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleStyle: navigationStyles.title,
          headerStyle: navigationStyles.header,
          headerLeft: () => <AnimatedHeaderBackButton />,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainPage.Component}
        />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.title,
          })}
          name="ChooseAdvertType"
        >
          {({ route }) => <ChooseAdvertTypePage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={({ route }) => ({
            title: getAdvertTypeTitle(route.params.type),
          })}
          name="AdvertsList"
        >
          {({ route }) => <AdvertsListPage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            headerRight: ProfilePage.headerRight,
            title: "Профиль",
          }}
          name="Profile"
          component={ProfilePage.Component}
        />
        <Stack.Screen
          options={{
            title: "Редактирование",
          }}
          name="EditProfile"
          component={EditProfilePage.Component}
        />
        <Stack.Screen
          options={{
            title: "Поиск пользователя",
          }}
          name="UserSearch"
          component={UserSearchPage.Component}
        />
        <Stack.Screen
          options={({ route }) => ({
            title: route.params.username,
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
          }}
          name="MyComments"
        >
          {({ route }) => <MyComments.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Ждут оценки",
          }}
          name="AwaitingComment"
        >
          {({ route }) => <AwaitingCommentPage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Отзывы обо мне",
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
          })}
          name="Comment"
        >
          {({ route }) => <CommentPage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Мои объявления",
          }}
          name="MyAdverts"
        >
          {({ route }) => <MyAdverts.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={({ route }) => ({
            title: getAdvertTypeTitle(route.params.type)
          })}
          name="NewAdvert"
        >
          {({ route }) => <NewAdvertPage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={({ route }) => ({
            title: getAdvertTypeTitle(route.params.type)
          })}
          name="Filter"
        >
          {({ route }) => <FilterPage.Component {...route.params} />}
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
            title: "Отзывы",
          }}
          name="UserComments"
        >
          {({ route }) => <UserCommentsPage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Новый отзыв",
          }}
          name="NewComment"
        >
          {({ route }) => <NewCommentPage.Component {...route.params} />}
        </Stack.Screen>
        <Stack.Screen
          options={{
            title: "Вход",
          }}
          name="Auth"
          component={AuthPage.Component}
        />
        <Stack.Screen
          options={{
            title: "Регистрация",
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

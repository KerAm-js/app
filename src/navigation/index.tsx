import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationStyles } from "./styles";
import UserSearchPage from "../pages/UserSearch";
import { RootStackParamList } from "./types";
import MyComments from "../pages/MyComments";
import CommentPage from "../pages/Comment";
import MyAdverts from "../pages/MyAdverts";
import MyModal from "../pages/Modal";
import AdvertPage from "../pages/Advert";
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
import DeletedAdvertsPage from "../pages/DeletedAdverts";
import AdvertImagesPage from "../pages/AdvertImages";
import AdvertsModule from "../modules/Adverts";
import { useAuth } from "../hooks/store/useAuth";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { token } = useAuth();

  return (
    <Stack.Navigator initialRouteName="Main">
      {token ? (
        <>
          <Stack.Group
            screenOptions={{
              headerShadowVisible: false,
              headerBackVisible: false,
              headerTitleStyle: navigationStyles.title,
              headerStyle: navigationStyles.header,
              headerLeft: () => <AdvertPage.HeaderBack />,
            }}
          >
            <Stack.Screen
              options={{
                headerLeft: MainPage.HeaderLeft,
                headerRight: MainPage.HeaderRight,
              }}
              name="Main"
              component={MainPage.Component}
            />
            <Stack.Screen
              options={({ route }) => ({
                title: route.params.title,
              })}
              name="ChooseAdvertType"
            >
              {({ route }) => (
                <ChooseAdvertTypePage.Component {...route.params} />
              )}
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
              {({ route }) => (
                <AwaitingCommentPage.Component {...route.params} />
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                title: "Отзывы обо мне",
              }}
              name="CommentsToMe"
            >
              {({ route }) => <UserCommentsPage.Component {...route.params} />}
            </Stack.Screen>
            <Stack.Screen
              options={({
                route: {
                  params: { defaultComment },
                },
              }) => ({
                title: defaultComment ? "Редактирование" : "Новый отзыв",
                headerRight: defaultComment
                  ? () => <CommentPage.headerRight id={defaultComment.id} />
                  : undefined,
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
              component={MyAdverts.Component}
            />
            <Stack.Screen
              options={{
                title: "Удалённые объявления",
              }}
              name="DeletedAdverts"
              component={DeletedAdvertsPage.Component}
            />
            <Stack.Screen
              options={({ route }) => ({
                title: getAdvertTypeTitle(route.params.type),
              })}
              name="NewAdvert"
            >
              {({ route }) => <NewAdvertPage.Component {...route.params} />}
            </Stack.Screen>
            <Stack.Screen options={{ title: "Фото" }} name="AdvertImages">
              {({ route }) => <AdvertImagesPage.Component {...route.params} />}
            </Stack.Screen>
            <Stack.Screen
              options={({ route }) => ({
                title: getAdvertTypeTitle(route.params.type),
              })}
              name="Filter"
            >
              {({ route }) => <FilterPage.Component {...route.params} />}
            </Stack.Screen>
            <Stack.Screen
              options={({ route }) => {
                const priceString = AdvertsModule.getPriceString(route.params);
                return {
                  title: priceString.first[0].toString() + priceString.first[1],
                  headerTransparent: true,
                };
              }}
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
          </Stack.Group>
          <Stack.Screen
            name="Modal"
            options={{
              presentation: "transparentModal",
              headerShown: false,
              animation: "none",
            }}
          >
            {({ route }) => <MyModal.Component {...route.params} />}
          </Stack.Screen>
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            options={{
              title: "Вход",
            }}
            component={AuthPage.Component}
          />
          <Stack.Screen
            name="Register"
            options={{
              title: "Регистрация",
            }}
            component={RegisterPage.Component}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

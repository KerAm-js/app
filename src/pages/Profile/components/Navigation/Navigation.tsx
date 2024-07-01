import { Pressable, Text, View } from "react-native";
import { profileNavigationStyles } from "./styles";
import ButtonsGroup from "../../../../UI/buttons/Group/ButtonsGroup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useActions } from "../../../../hooks/store/useActions";
import { useAuth } from "../../../../hooks/store/useAuth";

const Navigation = () => {
  const { logoutThunk } = useActions();
  const {user} = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const users = useSelector((state: RootState) => state.users);

  if (!user) {
    return null;
  }

  return (
    <View style={profileNavigationStyles.container}>
      <View style={profileNavigationStyles.groupButtonsContainer}>
        <ButtonsGroup
          data={[
            {
              title: "Мои отзывы",
              onPress: () =>
                navigation.navigate("MyComments", {
                  user: user,
                  userRole: "author",
                }),
            },
            // {
            //   title: "Ждут оценки",
            //   onPress: () =>
            //     navigation.navigate("AwaitingComment", {
            //       users: users.slice(0, 2),
            //     }),
            //   circleNumber: 2,
            // },
            {
              title: "Отзывы обо мне",
              onPress: () =>
                navigation.navigate("CommentsToMe", {
                  user: user,
                  userRole: "addressee",
                }),
            },
          ]}
        />
        <ButtonsGroup
          data={[
            {
              title: "Найти пользователя",
              onPress: () => navigation.navigate("UserSearch"),
            },
          ]}
        />
        <ButtonsGroup
          data={[
            {
              title: "Мои объявления",
              onPress: () => navigation.navigate("MyAdverts"),
            },
            {
              title: "Удалённые объявления",
              onPress: () => navigation.navigate("DeletedAdverts"),
            },
          ]}
        />
      </View>
      <BigButton
        title="Разместить объявление"
        onPress={() =>
          navigation.navigate("ChooseAdvertType", {
            title: "Новое объявление",
            navigateTo: "form",
          })
        }
      />
      <Pressable
        onPress={() => logoutThunk()}
        style={profileNavigationStyles.logoutButton}
      >
        <Text style={profileNavigationStyles.logoutButtonTitle}>
          Выйти из аккаунта
        </Text>
      </Pressable>
      <Pressable style={profileNavigationStyles.supportButton}>
        <Text style={profileNavigationStyles.supportButtonTitle}>
          Служба поддержки
        </Text>
      </Pressable>
    </View>
  );
};

export default Navigation;

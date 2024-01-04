import { Pressable, Text, View } from "react-native";
import { profileNavigationStyles } from "./styles";
import ButtonsGroup from "../../../../UI/buttons/Group/ButtonsGroup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { USER, USERS_LIST } from "../../../../consts/devData";

const Navigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={profileNavigationStyles.container}>
      <View style={profileNavigationStyles.groupButtonsContainer}>
        <ButtonsGroup
          data={[
            {
              title: "Мои отзывы",
              onPress: () =>
                navigation.navigate("MyComments", {
                  user: USER,
                  userRole: "author",
                }),
            },
            {
              title: "Ждут оценки",
              onPress: () => navigation.navigate("AwaitingComment", {users: USERS_LIST.slice(0, 2)}),
              circleNumber: 2
            },
            {
              title: "Отзывы обо мне",
              onPress: () =>
                navigation.navigate("CommentsToMe", {
                  user: USER,
                  userRole: "adressee",
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
              onPress: () => navigation.navigate("MyAdverts", {
                data: USER.adverts
              }),
            },
          ]}
        />
      </View>
      <BigButton
        title="Разместить объявление"
        onPress={() => navigation.navigate("ChooseAdvertType", {title: "Новое объявление", navigateTo: 'form'})}
      />
      <Pressable style={profileNavigationStyles.supportButton}>
        <Text style={profileNavigationStyles.supportButtonTitle}>
          Служба поддержки
        </Text>
      </Pressable>
    </View>
  );
};

export default Navigation;

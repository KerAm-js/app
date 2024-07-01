import { Text, View } from "react-native";
import { userInfoStyles } from "./styles";
import Rating from "../../../../UI/Rating/Rating";
import { GREY_LIGHT } from "../../../../consts/colors";
import { FC } from "react";
import { IUser } from "../../../../types/User";
import InfoCard from "../../../../UI/InfoCard/InfoCard";
import { RU_LANG } from "../../../../consts/rulang";
import Link from "../../../../UI/buttons/Link/Link";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useUserComments } from "../../../../hooks/store/useComments";
import { USER } from "../../../../consts/devData";

const UserInfo: FC<
  Pick<
    IUser,
    | "id"
    | "username"
    | "phone"
    | "email"
    | "description"
    | "rating"
    | "ratesCount"
  >
> = (props) => {
  const { id, username, phone, email, rating, description } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const commentsAboutUser = useUserComments({
    role: "addressee",
    id,
    textOnly: true,
  });

  const rates = useUserComments({
    role: "addressee",
    id,
  });

  const commentsLen = commentsAboutUser.length;

  const goToComments = () => {
    navigation.navigate("UserComments", { user: props, userRole: "addressee" });
  };

  return (
    <View style={userInfoStyles.container}>
      <Text style={userInfoStyles.username}>{username}</Text>
      <View style={userInfoStyles.ratingContainer}>
        {rating ? (
          <>
            <Rating
              rating={rating}
              type="presentation"
              backgroundColor={GREY_LIGHT}
            />

            <Text style={userInfoStyles.ratingText}>
              Рейтинг {rating} (количество оценок {rates.length})
            </Text>
          </>
        ) : (
          <Text style={userInfoStyles.ratingText}>Нет оценок</Text>
        )}
        {!!commentsLen && id !== USER.id && (
          <Link
            title={
              commentsLen +
              " " +
              (RU_LANG.comments[commentsLen] || RU_LANG.comments[0])
            }
            onPress={goToComments}
          />
        )}
      </View>
      <InfoCard title="Телефон" content={phone} />
      <InfoCard title="Почта" content={email} />
      {description && !!description.trim() && (
        <InfoCard title="Описание" content={description} />
      )}
    </View>
  );
};

export default UserInfo;

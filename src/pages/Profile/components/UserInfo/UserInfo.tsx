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

const UserInfo: FC<IUser> = (props) => {
  const {
    id,
    username,
    phone,
    email,
    rating,
    ratesCount,
    description,
    comments,
  } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const commentsAboutUser = comments.filter(
    (comment) => comment.adresseeId === id
  );

  const commentsLen = commentsAboutUser.length;

  const goToComments = () => {
    navigation.navigate("UserComments", { user: props, userRole: "adressee" });
  };

  return (
    <View style={userInfoStyles.container}>
      <Text style={userInfoStyles.username}>{username}</Text>
      <View style={userInfoStyles.ratingContainer}>
        <Rating
          rating={rating}
          type="presentation"
          backgroundColor={GREY_LIGHT}
        />
        <Text style={userInfoStyles.ratingText}>
          Рейтинг {rating} (количество оценок {ratesCount})
        </Text>
      </View>
      {!!commentsLen && (
        <Link
          title={
            commentsLen +
            " " +
            (RU_LANG.comments[commentsLen] || RU_LANG.comments[0])
          }
          onPress={goToComments}
        />
      )}
      <InfoCard title="Телефон" content={phone} />
      <InfoCard title="Почта" content={email} />
      {!!description && <InfoCard title="Описание" content={description} />}
    </View>
  );
};

export default UserInfo;

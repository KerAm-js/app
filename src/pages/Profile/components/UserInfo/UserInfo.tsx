import { Alert, Text, View } from "react-native";
import { userInfoStyles } from "./styles";
import Rating from "../../../../UI/Rating/Rating";
import { GREY_LIGHT } from "../../../../consts/colors";
import { FC, useEffect, useLayoutEffect } from "react";
import { IUser } from "../../../../types/User";
import InfoCard from "../../../../UI/InfoCard/InfoCard";
import { RU_LANG } from "../../../../consts/rulang";
import Link from "../../../../UI/buttons/Link/Link";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { USER } from "../../../../consts/devData";
import { toPhoneFormat } from "../../../../helpers/toPhoneFormat";

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
  const {
    id,
    username,
    phone,
    email,
    rating,
    description,
    ratesCount,
  } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToComments = () => {
    navigation.navigate("UserComments", { id });
  };

  return (
    <View style={userInfoStyles.container}>
      <Text style={userInfoStyles.username}>{username}</Text>
      <View style={userInfoStyles.ratingContainer}>
        {!!rating ? (
          <>
            <Rating
              rating={rating}
              type="presentation"
              backgroundColor={GREY_LIGHT}
            />

            <Text style={userInfoStyles.ratingText}>
              Рейтинг {rating} (количество оценок {ratesCount})
            </Text>
          </>
        ) : (
          <Text style={userInfoStyles.ratingText}>Нет оценок</Text>
        )}
        {!!ratesCount && id !== USER.id && (
          <Link
            title={ratesCount + " " + RU_LANG.comments[ratesCount]}
            onPress={goToComments}
          />
        )}
      </View>
      <InfoCard title="Телефон" content={toPhoneFormat(phone)} />
      <InfoCard title="Почта" content={email} />
      {description && !!description.trim() && (
        <InfoCard title="Описание" content={description} />
      )}
    </View>
  );
};

export default UserInfo;

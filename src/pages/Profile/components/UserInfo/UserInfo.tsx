import { Text, View } from "react-native";
import { userInfoStyles } from "./styles";
import Rating from "../../../../UI/Rating/Rating";
import { GREY_LIGHT } from "../../../../consts/colors";
import { FC } from "react";
import { IUser } from "../../../../types/User";
import InfoCard from "../../../../UI/InfoCard/InfoCard";

const UserInfo: FC<
  Pick<
    IUser,
    "username" | "phone" | "email" | "rating" | "ratesCount" | "description"
  >
> = ({ username, phone, email, rating, ratesCount, description }) => {
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
      <InfoCard title="Телефон" content={phone} />
      <InfoCard title="Почта" content={email} />
      {!!description && <InfoCard title="Описание" content={description} />}
    </View>
  );
};

export default UserInfo;

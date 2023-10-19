import { Text, View } from "react-native";
import { userInfoStyles } from "./styles";
import Rating from "../../../../UI/Rating/Rating";
import { GREY_LIGHT } from "../../../../consts/colors";
import { FC } from "react";
import { IUser } from "../../../../types/User";

const UserInfo: FC<
  Pick<IUser, "username" | "phone" | "email" | "rating" | "ratesCount">
> = ({ username, phone, email, rating, ratesCount }) => {
  return (
    <View style={userInfoStyles.container}>
      <Text style={userInfoStyles.username}>{username}</Text>
      <Text style={userInfoStyles.userInfoText}>{phone}</Text>
      <Text style={userInfoStyles.userInfoText}>{email}</Text>
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
    </View>
  );
};

export default UserInfo;

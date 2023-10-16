import { Text, View } from "react-native";
import { userInfoStyles } from "./styles";
import Rating from "../../../../UI/Rating/Rating";
import { GREY_LIGHT } from "../../../../consts/colors";

const UserInfo = () => {
  return (
    <View style={userInfoStyles.container}>
      <Text style={userInfoStyles.username}>ДунСтрой Групп</Text>
      <Text style={userInfoStyles.userInfoText}>8 928 123-45-67</Text>
      <Text style={userInfoStyles.userInfoText}>email@mail.ru</Text>
      <View style={userInfoStyles.ratingContainer}>
        <Rating rating={4.8} type="presentation" backgroundColor={GREY_LIGHT} />
        <Text style={userInfoStyles.ratingText}>Рейтинг 4.8 (на основе 124 оценок)</Text>
      </View>
    </View>
  );
};

export default UserInfo;

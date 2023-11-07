import { Pressable, Text, View } from "react-native";
import { userInfoStyles } from "./styles";
import Rating from "../../../../UI/Rating/Rating";
import { BLUE, GREY_LIGHT } from "../../../../consts/colors";
import { FC } from "react";
import { IUser } from "../../../../types/User";
import InfoCard from "../../../../UI/InfoCard/InfoCard";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../../../../assets/svg/arrowRight";
import { RU_LANG } from "../../../../consts/rulang";

const UserInfo: FC<IUser> = ({
  id,
  username,
  phone,
  email,
  rating,
  ratesCount,
  description,
  comments,
}) => {
  const commentsAboutUser = comments.filter(
    (comment) => comment.adresseeId === id
  );

  const commentsLen = commentsAboutUser.length;

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
        <Pressable
          style={userInfoStyles.button}
          onPress={() => console.log("pressed")}
        >
          <Text style={userInfoStyles.buttonTitle}>
            {commentsLen + " " + (RU_LANG.comments[commentsLen] ||
              RU_LANG.comments[0])}
          </Text>
          <SvgXml xml={arrowRightSvg(BLUE)} width={10} height={10} />
        </Pressable>
      )}
      <InfoCard title="Телефон" content={phone} />
      <InfoCard title="Почта" content={email} />
      {!!description && <InfoCard title="Описание" content={description} />}
    </View>
  );
};

export default UserInfo;

import { Linking, Text, View } from "react-native";
import Avatar from "../../../../UI/Avatar/Avatar";
import { advertUserInfoStyles } from "./styles";
import { GREEN, GREY_LIGHT } from "../../../../consts/colors";
import Rating from "../../../../UI/Rating/Rating";
import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import { IUser } from "../../../../types/User";
import Link from "../../../../UI/buttons/Link/Link";
import { RU_LANG } from "../../../../consts/rulang";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { telephoneSvg } from "../../../../assets/svg/telephone";

const AdvertUserInfo: FC<IUser> = ({
  id,
  rating,
  ratesCount,
  username,
  phone,
  comments,
}) => {
  const commentsAboutUser = comments.filter(
    (comment) => comment.adresseeId === id
  );

  const commentsLen = commentsAboutUser.length;

  const call = () => {
    const onPress = () => {
      Linking.openURL(`tel:${phone}`);
    };
  };

  return (
    <>
      <View style={advertUserInfoStyles.container}>
        <Avatar size={50} />
        <Text style={advertUserInfoStyles.username}>{username}</Text>
        <View style={advertUserInfoStyles.ratingContainer}>
          <Rating
            rating={rating}
            size={12}
            type="presentation"
            backgroundColor={GREY_LIGHT}
          />
          <Text style={advertUserInfoStyles.ratingText}>
            Рейтинг {rating} (количество оценок {ratesCount})
          </Text>
        </View>
        <Text style={advertUserInfoStyles.phone}>{phone}</Text>
        <Link
          title={
            commentsLen +
            " " +
            (RU_LANG.comments[commentsLen] || RU_LANG.comments[0])
          }
          onPress={() => console.log("pressed")}
        />
      </View>
      <BigButton backgroundColor={GREEN} title="Позвонить" onPress={call} />
    </>
  );
};

export default AdvertUserInfo;

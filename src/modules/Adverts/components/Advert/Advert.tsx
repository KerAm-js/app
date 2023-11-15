import { Pressable, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Avatar from "../../../../UI/Avatar/Avatar";
import Rating from "../../../../UI/Rating/Rating";
import { FC, useMemo } from "react";
import { TAdvert } from "../../../../types/Advert";
import LikeButton from "../../../../UI/buttons/Like/LikeButton";
import { advertStyles } from "./styles";
import { GREY_DARK, WHITE } from "../../../../consts/colors";
import Slider from "./Slider";
import { pointSvg } from "../../../../assets/svg/point";
import { SvgXml } from "react-native-svg";
import Param from "./Param";
import { watchSvg } from "../../../../assets/svg/watch";
import { eyeSvg } from "../../../../assets/svg/eye";
import { likeSvg } from "../../../../assets/svg/like";
import { getRelevanceObj } from "../../helpers/getRelevance";
import { USER } from "../../../../consts/devData";
import { circlesSvg } from "../../../../assets/svg/circles";

const Advert: FC<TAdvert> = ({
  id,
  type,
  userId,
  username,
  userRating,
  updatedAt,
  likes,
  views,
  title,
  general,
  params,
  price,
}) => {
  const isLiked = useMemo(() => !!likes.find((item) => item === userId), []);
  const paramsArr = useMemo(() => Object.entries(params.otherParams || {}), []);

  const onLike = (value: boolean) => {
    console.log(
      `Post ${id} is ${value ? "liked by" : "disliked by"} ${username}`
    );
  };
  const relevance = getRelevanceObj(updatedAt);

  console.log(title.length)

  return (
    <View style={advertStyles.container}>
      <View style={advertStyles.topContainer}>
        <Avatar size={36} />
        <View style={advertStyles.userInfo}>
          <Text style={advertStyles.username}>{username}</Text>
          <Rating
            backgroundColor={WHITE}
            rating={userRating}
            type="presentation"
            size={12}
          />
        </View>
        {
          USER.id === userId 
            ? <Pressable style={advertStyles.editButton}><SvgXml xml={circlesSvg()}/></Pressable>
            : <LikeButton onPress={onLike} isLiked={isLiked} />
        }
      </View>
      <View style={advertStyles.sliderContainer}>
        <View style={advertStyles.addressContainer}>
          <SvgXml xml={pointSvg(WHITE)} width={10} height={14} />
          <Text style={advertStyles.address}>{general.address}</Text>
        </View>
        <Slider type={type} params={params} />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)",  "rgba(0, 0, 0, 0.65)", "rgba(0, 0, 0, 0.8)"]}
          style={advertStyles.titleBackdrop}
        >
          <Text style={advertStyles.title}>{title}</Text>
        </LinearGradient>
      </View>
      <View style={advertStyles.paramsContainer}>
        {paramsArr.map((entry) => (
          <Param key={entry[0]} title={entry[0]} content={String(entry[1])} />
        ))}
      </View>
      <View style={advertStyles.bottomContainer}>
        <Text style={advertStyles.price}>
          {price.price}{" "}
          <Text style={advertStyles.paymentFor}>
            руб{type === "technic" ? " за " + price.paymentFor : null}
          </Text>
        </Text>
        <View style={advertStyles.advertInfo}>
          <SvgXml xml={watchSvg(relevance.color)} width={12} height={12} />
          <Text
            style={[advertStyles.advertInfoText, { color: relevance.color }]}
          >
            {relevance.string}
          </Text>
          <SvgXml xml={eyeSvg(GREY_DARK)} width={12} height={12} />
          <Text style={advertStyles.advertInfoText}>{views.length}</Text>
          <SvgXml xml={likeSvg(GREY_DARK)} width={12} height={12} />
          <Text style={advertStyles.advertInfoText}>{likes.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default Advert;

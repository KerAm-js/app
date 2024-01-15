import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../../../UI/Avatar/Avatar";
import Rating from "../../../../UI/Rating/Rating";
import { FC, useMemo } from "react";
import LikeButton from "../../../../UI/buttons/Like/LikeButton";
import { advertStyles } from "./styles";
import { BLACK_DARK, GREY_DARK, WHITE } from "../../../../consts/colors";
import Slider from "./Slider";
import { pointSvg } from "../../../../assets/svg/point";
import { SvgXml } from "react-native-svg";
import Param from "./Param";
import { watchSvg } from "../../../../assets/svg/watch";
import { eyeSvg } from "../../../../assets/svg/eye";
import { likeFillSvg } from "../../../../assets/svg/likeFill";
import { getRelevanceObj } from "../../helpers/getRelevance";
import { USER } from "../../../../consts/devData";
import { circlesSvg } from "../../../../assets/svg/circles";
import { TAdvert } from "../../../../types/Advert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { ITechnicOtherParams } from "../../../../types/Technic";

const Advert: FC<TAdvert> = (props) => {
  const {
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
  } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openModal = () => {
    navigation.navigate("Modal", { advertId: id });
  };
  const isLiked = useMemo(() => !!likes.find((item) => item === USER.id), []);
  const paramsArr = useMemo(() => Object.entries(params.otherParams || {}), []);

  console.log(params.otherParams);

  const onLike = (value: boolean) => {
    console.log(
      `Post ${id} is ${value ? "liked by" : "disliked by"} ${username}`
    );
  };

  const relevance = getRelevanceObj(updatedAt);

  const goToAdvertPage = () => navigation.navigate("Advert", props);

  return (
    <View style={advertStyles.container}>
      <Pressable style={advertStyles.topContainer} onPress={goToAdvertPage}>
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
        {USER.id === userId ? (
          <Pressable onPress={openModal} style={advertStyles.editButton}>
            <SvgXml xml={circlesSvg()} />
          </Pressable>
        ) : (
          <LikeButton onPress={onLike} isLiked={isLiked} />
        )}
      </Pressable>
      <View style={advertStyles.sliderContainer}>
        <View style={advertStyles.addressContainer}>
          <SvgXml xml={pointSvg(WHITE)} width={10} height={14} />
          <Text style={advertStyles.address}>{general.address}</Text>
        </View>
        <Slider type={type} params={params} />
        <LinearGradient
          colors={
            !!params.photos.length
              ? [
                  "rgba(0, 0, 0, 0)",
                  "rgba(0, 0, 0, 0.6)",
                  "rgba(0, 0, 0, 0.85)",
                ]
              : []
          }
          style={advertStyles.titleBackdrop}
        >
          <Text
            style={[
              advertStyles.title,
              !params.photos.length && { color: BLACK_DARK },
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </View>
      <Pressable onPress={goToAdvertPage}>
        <View style={advertStyles.paramsContainer}>
          {paramsArr.map((entry) => (
            <Param key={entry[0]} param={entry[0]} content={String(entry[1])} />
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
            <SvgXml xml={likeFillSvg(GREY_DARK)} width={12} height={12} />
            <Text style={advertStyles.advertInfoText}>{likes.length}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Advert;

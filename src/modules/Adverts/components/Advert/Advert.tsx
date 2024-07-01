import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../../../UI/Avatar/Avatar";
import Rating from "../../../../UI/Rating/Rating";
import { FC, useMemo } from "react";
import LikeButton from "../../../../UI/buttons/Like/LikeButton";
import { advertStyles } from "./styles";
import { BLACK_DARK, GREY_DARK, RED, WHITE } from "../../../../consts/colors";
import Slider from "./Slider";
import { pointSvg } from "../../../../assets/svg/point";
import { SvgXml } from "react-native-svg";
import { watchSvg } from "../../../../assets/svg/watch";
import { eyeSvg } from "../../../../assets/svg/eye";
import { likeFillSvg } from "../../../../assets/svg/likeFill";
import { getRelevanceObj } from "../../helpers/getRelevance";
import { circlesSvg } from "../../../../assets/svg/circles";
import { TAdvert } from "../../../../types/Advert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { TRANSACTION_TYPES } from "../../../../consts/data";
import { getPriceString } from "../../helpers/getPaymentFor";
import { useAuth } from "../../../../hooks/store/useAuth";

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
    photos,
    general,
    params,
    price,
    transactionType,
    status,
  } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { user } = useAuth();
  const openModal = () => {
    navigation.navigate("Modal", props);
  };
  const isLiked = useMemo(() => !!likes.find((item) => item === user?.id), []);
  // const paramsArr = useMemo(() => {
  //   const result: Array<[string, string]> = Object.entries(params);
  //   return result;
  // }, []);

  const onLike = (value: boolean) => {
    console.log(
      `Post ${id} is ${value ? "liked by" : "disliked by"} ${username}`
    );
  };

  const relevance = getRelevanceObj(updatedAt);

  const goToAdvertPage = () => navigation.navigate("Advert", props);

  const priceString = getPriceString(props);

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
        {user?.id === userId ? (
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
        <Slider type={type} photos={photos} />
        <LinearGradient
          colors={
            !!photos.length
              ? [
                  "rgba(0, 0, 0, 0)",
                  "rgba(0, 0, 0, 0.6)",
                  "rgba(0, 0, 0, 0.85)",
                ]
              : ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"]
          }
          style={advertStyles.titleBackdrop}
        >
          <Text
            style={[
              advertStyles.title,
              !photos.length && { color: BLACK_DARK },
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </View>
      <Pressable onPress={goToAdvertPage}>
        {/* <View style={advertStyles.paramsContainer}>
          {paramsArr.map((entry) => (
            <Param key={entry[0]} param={entry[0]} content={String(entry[1])} />
          ))}
        </View> */}
        <View style={advertStyles.priceContainer}>
          <View>
            <Text style={advertStyles.price}>
              {priceString.first[0]}
              <Text style={advertStyles.paymentFor}>
                {priceString.first[1]}
              </Text>
            </Text>
            {priceString.second && (
              <Text style={advertStyles.price}>
                {priceString.second[0]}
                <Text style={advertStyles.paymentFor}>
                  {priceString.second[1]}
                </Text>
              </Text>
            )}
          </View>
          <Text style={advertStyles.paymentFor}>
            {TRANSACTION_TYPES[transactionType]}
          </Text>
        </View>
        {status !== "deleted" && (
          <View style={advertStyles.bottomContainer}>
            {status === "stopped" ? (
              <Text style={[advertStyles.paymentFor, { color: RED }]}>
                Снято с публикации
              </Text>
            ) : (
              <View style={advertStyles.advertInfo}>
                <SvgXml
                  xml={watchSvg(relevance.color)}
                  width={12}
                  height={12}
                />
                <Text
                  style={[
                    advertStyles.advertInfoText,
                    { color: relevance.color },
                  ]}
                >
                  {relevance.string}
                </Text>
                <SvgXml xml={eyeSvg(GREY_DARK)} width={12} height={12} />
                <Text style={advertStyles.advertInfoText}>{views.length}</Text>
                <SvgXml xml={likeFillSvg(GREY_DARK)} width={12} height={12} />
                <Text style={advertStyles.advertInfoText}>{likes.length}</Text>
              </View>
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Advert;

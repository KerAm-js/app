import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../../../UI/Avatar/Avatar";
import Rating from "../../../../UI/Rating/Rating";
import { FC, memo } from "react";
import { advertStyles } from "./styles";
import { BLACK_DARK, GREY_DARK, RED, WHITE } from "../../../../consts/colors";
import { pointSvg } from "../../../../assets/svg/point";
import { SvgXml } from "react-native-svg";
import { watchSvg } from "../../../../assets/svg/watch";
import { eyeSvg } from "../../../../assets/svg/eye";
import { likeFillSvg } from "../../../../assets/svg/likeFill";
import { getRelevanceObj } from "../../helpers/getRelevance";
import { circlesSvg } from "../../../../assets/svg/circles";
import { IAdvert } from "../../../../types/Advert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { TRANSACTION_TYPE_TITLE } from "../../../../consts/data";
import { getPriceString } from "../../helpers/getPaymentFor";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useGetUserByIdQuery } from "../../../SearchUsers/api/users.api";
import {
  useGetImageNamesByOrderIdQuery,
  useGetLikesByAdvertIdQuery,
} from "../../api/adverts.api";
import { API_URL } from "../../../../api/api";
import { getAdvertTypeIconFunc } from "../../../../helpers/advertTypeGetters";
import { SetLike } from "../../../Like/components/SetLike";

const Advert: FC<IAdvert> = memo((props) => {
  const {
    id,
    advertType,
    advertStatus,
    ownerId,
    updatedAt,
    views,
    title,
    transactionType,
  } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { user, token } = useAuth();
  const { data: likes, isLoading: isLikesLoading } = useGetLikesByAdvertIdQuery(
    { advertType, id }
  );
  const { data: owner, isFetching } = useGetUserByIdQuery({ id: ownerId });
  const { data: photos } = useGetImageNamesByOrderIdQuery({
    order_id: id.toString(),
    advert_type: advertType,
  });
  const openModal = () => {
    navigation.navigate("Modal", props);
  };

  const relevance = getRelevanceObj(updatedAt);

  const goToAdvertPage = () =>
    navigation.navigate("Advert", {
      isMini: false,
      advert: { ...props, photos },
    });

  const priceString = getPriceString(props);

  console.log(props.updatedAt)

  return (
    <Pressable style={advertStyles.container} onPress={goToAdvertPage}>
      {isFetching || !owner ? (
        <ActivityIndicator />
      ) : (
        <View style={advertStyles.topContainer}>
          <Avatar size={36} userId={ownerId} />
          <View style={advertStyles.userInfo}>
            <Text style={advertStyles.username}>{owner.username}</Text>
            <Rating
              backgroundColor={WHITE}
              rating={owner.rating}
              type="presentation"
              size={12}
            />
          </View>
          {String(user?.id) === String(ownerId) ? (
            <Pressable onPress={openModal} style={advertStyles.editButton}>
              <SvgXml xml={circlesSvg()} />
            </Pressable>
          ) : (
            <SetLike advertId={id} advertType={advertType} />
          )}
        </View>
      )}
      <View style={advertStyles.sliderContainer}>
        <View style={advertStyles.addressContainer}>
          <SvgXml xml={pointSvg(WHITE)} width={10} height={14} />
          {/* <Text style={advertStyles.address}>{address}</Text> */}
        </View>
        {!!photos && !!photos.length ? (
          <Image
            style={advertStyles.image}
            source={{
              uri: `${API_URL}/fileSystem/${photos[0]}`,
              cache: "force-cache",
              headers: {
                Authorization: token || "",
              },
            }}
            resizeMode="cover"
          />
        ) : (
          <View style={advertStyles.sliderEmptyContainer}>
            <SvgXml
              xml={getAdvertTypeIconFunc(advertType)(GREY_DARK)}
              width={60}
              height={60}
            />
          </View>
        )}
        <LinearGradient
          colors={
            Boolean(photos?.length)
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
              !photos?.length && { color: BLACK_DARK },
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </View>
      <View style={advertStyles.priceContainer}>
        <View>
          <Text style={advertStyles.price}>
            {priceString.first[0]}
            <Text style={advertStyles.paymentFor}>{priceString.first[1]}</Text>
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
          {TRANSACTION_TYPE_TITLE[transactionType]}
        </Text>
      </View>
      {advertStatus !== "DELETED" && (
        <View style={advertStyles.bottomContainer}>
          {advertStatus === "STOPPED" ? (
            <Text style={[advertStyles.paymentFor, { color: RED }]}>
              Снято с публикации
            </Text>
          ) : (
            <View style={advertStyles.advertInfo}>
              <SvgXml xml={watchSvg(relevance.color)} width={12} height={12} />
              <Text
                style={[
                  advertStyles.advertInfoText,
                  { color: relevance.color },
                ]}
              >
                {relevance.string}
              </Text>
              <SvgXml xml={eyeSvg(GREY_DARK)} width={12} height={12} />
              <Text style={advertStyles.advertInfoText}>{views}</Text>
              <SvgXml xml={likeFillSvg(GREY_DARK)} width={12} height={12} />
              {!!likes && (
                <Text style={advertStyles.advertInfoText}>{likes.length}</Text>
              )}
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
});

export default Advert;

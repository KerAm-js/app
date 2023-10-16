import { FC } from "react";
import { Pressable, View } from "react-native";
import { IStarProps } from "./types";
import { SvgXml } from "react-native-svg";
import { ratingStyles } from "./styles";
import { GREY_LIGHT, GREY_MIDDLE, YELLOW } from "../../consts/colors";
import { starSubstractedSvg } from "../../assets/svg/starSubstracted";
import { starSvg } from "../../assets/svg/star";

const Star: FC<IStarProps> = ({
  type,
  rating,
  setRating,
  index,
  backgroundColor,
}) => {
  if (type === "button" && setRating) {
    const onPress = () => {
      setRating(index);
    };
    return (
      <Pressable onPress={onPress}>
        <SvgXml
          xml={starSvg(rating >= index ? YELLOW : GREY_MIDDLE)}
          width={20}
          height={20}
        />
      </Pressable>
    );
  }

  const width = ratingStyles.starWrapper.width * (rating - (index - 1));

  return (
    <View style={ratingStyles.starWrapper}>
      <View
        style={[
          ratingStyles.ratingIndicator,
          { width: width > 20 ? 20 : width },
        ]}
      />
      <SvgXml
        xml={starSubstractedSvg(backgroundColor || GREY_LIGHT)}
        width={20}
        height={20}
      />
    </View>
  );
};

export default Star;

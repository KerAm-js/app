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
  size,
}) => {
  if (type === "button" && setRating) {
    const onPress = () => {
      setRating(index);
    };
    return (
      <Pressable onPress={onPress}>
        <SvgXml
          xml={starSvg(rating >= index ? YELLOW : GREY_MIDDLE)}
          width={size}
          height={size}
        />
      </Pressable>
    );
  }

  const width = size * (rating - (index - 1));

  return (
    <View style={[ratingStyles.starWrapper, { width: size, height: size }]}>
      <View
        style={[
          ratingStyles.ratingIndicator,
          { width: width > size ? size : width },
        ]}
      />
      <SvgXml
        xml={starSubstractedSvg(backgroundColor || GREY_LIGHT)}
        width={size}
        height={size}
      />
    </View>
  );
};

export default Star;

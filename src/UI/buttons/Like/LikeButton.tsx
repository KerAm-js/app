import { FC, useState } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { TLikeButtonProps } from "./types";
import { likeSvg } from "../../../assets/svg/like";
import { GREY_MIDDLE, RED, WHITE } from "../../../consts/colors";
import { likeButtonStyles } from "./styles";

const LikeButton: FC<TLikeButtonProps> = ({ onPress, size = 26, isLiked }) => {

  const [isActive, setIsActive] = useState<boolean>(!!isLiked);

  const onPressHandler = () => {
    setIsActive(value => {
      onPress(!value);
      return !value
    });
  } 

  return (
    <Pressable
      style={[
        likeButtonStyles.container,
        {
          width: size,
          height: size,
          marginLeft: 20,
          backgroundColor: isActive ? RED : GREY_MIDDLE,
        },
      ]}
      onPress={onPressHandler}
    >
      <SvgXml xml={likeSvg(WHITE)} width={size / 2} height={size / 2} />
    </Pressable>
  );
};

export default LikeButton;

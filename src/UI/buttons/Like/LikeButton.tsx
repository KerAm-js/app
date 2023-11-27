import { FC, useState } from "react";
import { Pressable, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { TLikeButtonProps } from "./types";
import { likeFillSvg } from "../../../assets/svg/likeFill";
import { GREY_DARK, RED, WHITE } from "../../../consts/colors";
import { likeButtonStyles } from "./styles";

const LikeButton: FC<TLikeButtonProps> = ({
  onPress,
  size = 26,
  isLiked,
}) => {
  const [isActive, setIsActive] = useState<boolean>(!!isLiked);

  const onPressHandler = () => {
    setIsActive((value) => {
      onPress(!value);
      return !value;
    });
  };

  return (
    <Pressable
      style={[
        likeButtonStyles.container,
        {
          width: size,
          height: size,
          marginLeft: 20,
          backgroundColor: isActive ? RED : GREY_DARK,
        },
      ]}
      onPress={onPressHandler}
    >
      <SvgXml xml={likeFillSvg(WHITE)} width={size / 2} height={size / 2} />
    </Pressable>
  );
};

export default LikeButton;

import { Image, View } from "react-native";
import { avatarStyles } from "./styles";
import { FC } from "react";
import { TAvatarProps } from "./types";
import { BLACK_DARK, WHITE } from "../../consts/colors";

const Avatar: FC<TAvatarProps> = ({ width = 120, height = 120 }) => {
  return (
    <View
      style={[
        avatarStyles.container,
        { width, height },
        {
          shadowColor: WHITE,
          shadowOffset: {
            width: 0,
            height: -(width / 12),
          },
          shadowOpacity: 1,
          shadowRadius: width / 12,
        },
      ]}
    >
      <View
        style={[
          avatarStyles.container,
          { width, height },
          {
            shadowColor: BLACK_DARK,
            shadowOffset: {
              width: 0,
              height: width / 24,
            },
            shadowOpacity: 0.1,
            shadowRadius: width / 36,
          },
        ]}
      >
        <View
          style={[
            avatarStyles.imageContainer,
            { width: width / 1.2, height: height / 1.2 },
          ]}
        >
          <Image
            style={{ width: width / 1.71, height: height / 1.71 }}
            source={require("../../assets/images/avatar.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default Avatar;

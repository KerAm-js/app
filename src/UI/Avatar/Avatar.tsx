import { Image, Platform, View } from "react-native";
import { avatarStyles } from "./styles";
import { FC } from "react";
import { TAvatarProps } from "./types";
import { BLACK_DARK, WHITE } from "../../consts/colors";

const Avatar: FC<TAvatarProps> = ({ size = 120 }) => {
  return (
    <View
      style={[
        avatarStyles.container,
        { width: size, height: size },
        Platform.OS === "ios" && {
          shadowColor: WHITE,
          shadowOffset: {
            width: 0,
            height: -(size / 12),
          },
          shadowOpacity: 1,
          shadowRadius: size / 12,
        },
      ]}
    >
      <View
        style={[
          avatarStyles.container,
          { width: size, height: size },
          Platform.OS === "android"
            ? { elevation: 3, shadowColor: BLACK_DARK }
            : {
                shadowColor: BLACK_DARK,
                shadowOffset: {
                  width: 0,
                  height: size / 24,
                },
                shadowOpacity: 0.1,
                shadowRadius: size / 36,
              },
        ]}
      >
        <View
          style={[
            avatarStyles.imageContainer,
            { width: size / 1.2, height: size / 1.2 },
          ]}
        >
          <Image
            style={{ width: size / 1.71, height: size / 1.71 }}
            source={require("../../assets/images/avatar.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default Avatar;

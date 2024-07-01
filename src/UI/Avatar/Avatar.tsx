import { Image, Platform, Pressable, View } from "react-native";
import { avatarStyles } from "./styles";
import { FC, useState } from "react";
import { TAvatarProps } from "./types";
import { BLACK_DARK, WHITE } from "../../consts/colors";
import * as ImagePicker from "expo-image-picker";

const Avatar: FC<TAvatarProps> = ({ size = 120, applyAvatarEdititing }) => {
  const [image, setImage] = useState<string | null>();

  const pickImageAsync = async () => {
    try {
      let result: ImagePicker.ImagePickerResult =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: false,
        });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable
      onPress={applyAvatarEdititing ? pickImageAsync : undefined}
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
          {image ? (
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 50,
              }}
              source={{ uri: image }}
            />
          ) : (
            <Image
              style={{
                width: size / 1.71,
                height: size / 1.71,
                borderRadius: 50,
              }}
              source={require("../../assets/images/avatar.jpg")}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Avatar;

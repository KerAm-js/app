import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { cameraSvg } from "../../../assets/svg/camera";
import { GREY_DARK, WHITE } from "../../../consts/colors";
import { photoInputStyles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { FC } from "react";
import { IImage, IPhotoInputProps } from "./types";
import { cancelSvg } from "../../../assets/svg/cancel";

function roundBottom(num: number, precision: number) {
  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
}

const PhotoInput: FC<IPhotoInputProps> = ({
  photosCount,
  images,
  setImages,
}) => {
  const compressImage = async (uri: string) => {
    const fileSize = await getSize(uri);
    const megaBytes = fileSize ? fileSize / 1048576 : null;
    const compress =
      megaBytes && megaBytes > 1
        ? roundBottom(1 / megaBytes, 1) - 0.1
        : undefined;
    const manipResult = await ImageManipulator.manipulateAsync(uri, [], {
      compress,
      format: ImageManipulator.SaveFormat.JPEG,
    });
    return manipResult.uri;
  };

  const getSize = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob.size; // Size in bytes
  };

  const pickImageAsync = async (index: number) => {
    try {
      global.FormData;
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
        quality: 1,
      });
      if (!result.canceled) {
        const results: IImage[] = [...images];
        const image = await compressImage(result.assets[0].uri);
        results[index] = {
          uri: image,
          type: "image/jpeg",
          name: result.assets[0].fileName || "",
        };
        setImages(results);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const deleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={photoInputStyles.container}
    >
      {new Array(photosCount).fill(0).map((_, i) => {
        if (!!images[i]) {
          return (
            <View key={images[i].uri} style={photoInputStyles.imageContainer}>
              <Image
                style={photoInputStyles.image}
                source={{ uri: images[i].uri }}
                width={150}
                height={150}
              />
              <Pressable
                onPress={() => deleteImage(i)}
                style={photoInputStyles.cancelButton}
              >
                <SvgXml xml={cancelSvg(WHITE)} width={8} height={8} />
              </Pressable>
            </View>
          );
        }
        return (
          <Pressable
            key={i}
            onPress={() => pickImageAsync(i)}
            style={photoInputStyles.input}
          >
            <SvgXml xml={cameraSvg(GREY_DARK)} width={20} height={20} />
            <Text style={photoInputStyles.text}>Добавьте фото</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default PhotoInput;

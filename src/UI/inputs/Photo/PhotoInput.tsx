import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { cameraSvg } from "../../../assets/svg/camera";
import { GREY_DARK, WHITE } from "../../../consts/colors";
import { photoInputStyles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { FC, useState } from "react";
import { IPhotoInputProps } from "./types";
import { cancelSvg } from "../../../assets/svg/cancel";

const PhotoInput: FC<IPhotoInputProps> = ({ photosCount }) => {
  const [selectedImages, setSelectedImages] = useState<Array<string>>([]);

  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        selectionLimit: photosCount,
        quality: 1,
      });
      if (!result.canceled) {
        const results = result.assets.map((asset, i) => asset.uri);
        setSelectedImages(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImage = (index: number) => {
    setSelectedImages((images) => images.filter((_, i) => i !== index));
  };

  return (
    <ScrollView horizontal contentContainerStyle={photoInputStyles.container}>
      {new Array(photosCount).fill(0).map((_, i) => {
        if (!!selectedImages[i]) {
          return (
            <View
              key={selectedImages[i]}
              style={photoInputStyles.imageContainer}
            >
              <Image
                style={photoInputStyles.image}
                source={{ uri: selectedImages[i] }}
                width={100}
                height={100}
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
            onPress={pickImageAsync}
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

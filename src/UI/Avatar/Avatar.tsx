import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  Pressable,
  View,
} from "react-native";
import { avatarStyles } from "./styles";
import { FC, useState } from "react";
import { TAvatarProps } from "./types";
import { BLACK_DARK, WHITE } from "../../consts/colors";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import axios from "axios";
import { API_URL } from "../../api/api";
import { useAuth } from "../../hooks/store/useAuth";
import AuthModule from "../../modules/Auth";

interface FormDataValue {
  uri: string;
  name: string;
  type: string;
}

interface FormData {
  append(
    name: string,
    value: string | Blob | FormDataValue,
    fileName?: string
  ): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(
    name: string,
    value: string | Blob | FormDataValue,
    fileName?: string
  ): void;
}

declare let FormData: {
  prototype: FormData;
  new (form?: HTMLFormElement): FormData;
};

interface FormData {
  entries(): IterableIterator<[string, string | File]>;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string | File>;
  [Symbol.iterator](): IterableIterator<string | File>;
}

function roundBottom(num: number, precision: number) {
  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
}

const Avatar: FC<TAvatarProps> = ({
  size = 120,
  applyAvatarEdititing,
  userId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuth();
  const pickImageAsync = async () => {
    try {
      let result: ImagePicker.ImagePickerResult =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: false,
          quality: 1,
        });
      if (!result.canceled && !!result.assets[0]) {
        setIsLoading(true);
        const fileSize = result.assets[0].fileSize;
        const megaBytes = fileSize ? fileSize / 1048576 : null;
        const compress =
          megaBytes && megaBytes > 1
            ? roundBottom(1 / megaBytes, 1) - 0.1
            : undefined;
        const { width, height } = result.assets[0];
        const cropSide = width > height ? "width" : height;
        const cropValue =
          cropSide === "width" ? width - height : height - width;
        const side = cropSide === "width" ? height : width;
        const image = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [
            {
              crop: {
                width: side,
                height: side,
                originX: cropSide === "width" ? cropValue / 2 : 0,
                originY: cropSide === "width" ? 0 : cropValue / 2,
              },
            },
            {
              resize: {
                width: 200,
                height: 200,
              },
            },
          ],
          {
            compress,
            format: ImageManipulator.SaveFormat.JPEG,
          }
        );
        const formData = new FormData();
        if (image) {
          formData.append("avatar", {
            uri: image.uri,
            type: "image/jpeg",
            name:
              result.assets[0].fileName ||
              `${userId}-avatar-${new Date().valueOf().toString()}`,
          });
          const response = await axios.post(
            `${API_URL}/secured/current-user/post-avatar`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
              transformRequest: () => formData,
            }
          );
          if (response.status === 200) {
            console.log(response.data);
          }
        }
      }
    } catch (error) {
      Alert.alert(AuthModule.handleError(error));
    } finally {
      setIsLoading(false);
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
          {isLoading ? (
            <View style={avatarStyles.loaderContainer}>
              <ActivityIndicator />
            </View>
          ) : (
            <>
              <Image
                style={avatarStyles.image}
                source={{
                  uri: `${API_URL}/user/avatar/${userId}`,
                }}
                defaultSource={require("../../assets/images/avatar.jpg")}
              />
              {Platform.OS === "android" && (
                <Image
                  style={[
                    avatarStyles.image,
                    {
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: -1,
                    },
                  ]}
                  source={require("../../assets/images/avatar.jpg")}
                />
              )}
            </>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default Avatar;

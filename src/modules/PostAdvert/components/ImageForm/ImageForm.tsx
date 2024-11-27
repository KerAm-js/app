import { FC, useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { IImageFormProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useUploadImageToAdvertMutation } from "../../api/postAdvert.api";
import { Alert } from "react-native";
import { IImage } from "../../../../UI/inputs/Photo/types";
import { useAuth } from "../../../../hooks/store/useAuth";
import axios, { isAxiosError } from "axios";
import { API_URL } from "../../../../api/api";

const ImageForm: FC<IImageFormProps> = ({
  advertId,
  advertType,
  isPhotosRequired,
}) => {
  console.log(advertId)
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [images, setImages] = useState<IImage[]>([]);
  const { token } = useAuth();
  const [uploadImageToAdvert, { isLoading, error, data }] =
    useUploadImageToAdvertMutation();
  const inputs: TFormInputsArray = [
    {
      title: isPhotosRequired
        ? "Добавьте минимум одно фото"
        : "Добавьте фото (по желанию)",
      inputs: [
        {
          id: "photo",
          type: "photo",
          photosCount: 9,
          images,
          setImages,
        },
      ],
    },
  ];

  const onSubmit = async () => {
    images.forEach(async (image) => {
      uploadImageToAdvert({ image, advertType, advertId, token: token || "" });
    });
  };

  useEffect(() => {
    if (data) {
      Alert.alert("Успешно", "Ваше объявление опубликовано", [
        {
          text: "Продолжить",
          onPress: () => {
            navigation.navigate("Profile");
          },
        },
      ]);
    } else if (error) {
      Alert.alert("Ошибка", "Что-то пошло не так");
    }
  }, [data, error]);

  return (
    <Form
      isFormValid={images.length > 0 || !isPhotosRequired}
      inputs={inputs}
      submitTitle="Опубликовать"
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
};

export default ImageForm;

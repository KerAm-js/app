import { FC, useEffect, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { IImageFormProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useGetAdvertImagesMutation } from "../../api/editAdvert.api";
import { Alert } from "react-native";
import { IImage } from "../../../../UI/inputs/Photo/types";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useUploadImageToAdvertMutation } from "../../../PostAdvert/api/postAdvert.api";


const ImageForm: FC<IImageFormProps> = ({
  advertId,
  advertType,
  isPhotosRequired,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [images, setImages] = useState<IImage[]>([]);
  const { token } = useAuth();
  const [getAdvertImages, getAdvertImagesResult] =
    useGetAdvertImagesMutation();
  const [uploadImageToAdvert, uploadImageToAdvertResult] = useUploadImageToAdvertMutation()
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
          advertType,
          advertId,
          token
        },
      ],
    },
  ];
  useEffect(() => {
    getAdvertImages({advertType, advertId, token: token || ""})

  }, [])

  let imagesGotArray = []

  useEffect(() => {
    if(getAdvertImagesResult.data !== undefined){
      for(let i = 0; i < getAdvertImagesResult.data.length; i++){
        imagesGotArray.push({name: getAdvertImagesResult.data[i], uri: `http://188.0.167.98:9636/demo/fileSystem/${getAdvertImagesResult.data[i]}`})
      }
      setImages([...images, ...imagesGotArray ])
    }
  }, [getAdvertImagesResult] )


  const onSubmit = async () => {
    images.forEach(async (image) => {
      uploadImageToAdvert({ image, advertType, advertId, token: token || "" });
    });
  };


  useEffect(() => {
    if (uploadImageToAdvertResult.data) {
      Alert.alert("Успешно", "Ваше объявление опубликовано", [
        {
          text: "Продолжить",
          onPress: () => {
            navigation.navigate("Profile");
          },
        },
      ]);
    } else if (uploadImageToAdvertResult.error) {

      Alert.alert("Ошибка", "Что-то пошло не так");
  }
  }, [uploadImageToAdvertResult.data, uploadImageToAdvertResult.error]);

  return (
    <Form
      isFormValid={images.length > 0 || !isPhotosRequired}
      inputs={inputs}
      submitTitle="Сохранить"
      onSubmit={onSubmit}
      isLoading={getAdvertImagesResult.isLoading}
    />
  );
};

export default ImageForm;

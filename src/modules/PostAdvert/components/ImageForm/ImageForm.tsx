import { FC, useState } from "react";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { IImageFormProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useActions } from "../../../../hooks/store/useActions";

const ImageForm: FC<IImageFormProps> = ({ advertId, isPhotosRequired }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { addPhotosToAdvert } = useActions();

  const [images, setImages] = useState<string[]>([]);
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

  const onSubmit = () => {
    addPhotosToAdvert({ id: advertId, photos: images });
    navigation.navigate("Profile");
  };

  return (
    <Form
      isFormValid={images.length > 0 || !isPhotosRequired}
      inputs={inputs}
      submitTitle="Опубликовать"
      onSubmit={onSubmit}
    />
  );
};

export default ImageForm;

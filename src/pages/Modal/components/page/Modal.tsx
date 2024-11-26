import { FC } from "react";
import { View } from "react-native";
import { modalStyles } from "./styles";
import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { TSheetButtonProps } from "../../../../components/BottomSheet/types";
import { IAdvert } from "../../../../types/Advert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";

const MyModal: FC<IAdvert> = (props) => {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const actions: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Редактировать",
      onPress: () => {
        navigation.goBack()
        navigation.navigate('EditAdvert', props)
      },
      type: "default",
    },
    {
      id: "2",
      title: "Обновить актуальность",
      onPress: () => {},
      type: "default",
    },
    {
      id: "3",
      title:
        props.advertStatus === "PUBLISHED" ? "Снять с публикации" : "Опубликовать",
      onPress: () => {},
      type: "default",
    },
    {
      id: "4",
      title: "Удалить объявление",
      onPress: () => {},
      type: "destructive",
      confirmMessage: "Вы уверены, что хотите удалить объявление?",
    },
  ];

  const actionsForDeletedAdvert: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Восстановить объявление",
      onPress: () => {},
      type: "default",
    },
    {
      id: "2",
      title: "Редактировать",
      onPress: () => {},
      type: "default",
    },
  ];

  return (
    <View style={modalStyles.container}>
      <BottomSheet
        title="Выберите действие"
        actions={props.advertStatus === "DELETED" ? actionsForDeletedAdvert : actions}
      />
    </View>
  );
};

export default MyModal;

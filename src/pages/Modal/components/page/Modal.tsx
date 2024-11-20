import { FC } from "react";
import { View } from "react-native";
import { modalStyles } from "./styles";
import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { TSheetButtonProps } from "../../../../components/BottomSheet/types";
import { IAdvert } from "../../../../types/Advert";

const MyModal: FC<IAdvert> = ({ id, advertStatus }) => {
  const actions: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Редактировать",
      onPress: () => {},
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
        advertStatus === "PUBLISHED" ? "Снять с публикации" : "Опубликовать",
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
        actions={advertStatus === "DELETED" ? actionsForDeletedAdvert : actions}
      />
    </View>
  );
};

export default MyModal;

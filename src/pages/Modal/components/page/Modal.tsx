import { FC } from "react";
import { View } from "react-native";
import { modalStyles } from "./styles";
import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { TSheetButtonProps } from "../../../../components/BottomSheet/types";
import { useActions } from "../../../../hooks/store/useActions";
import { IAdvert } from "../../../../types/Advert";

const MyModal: FC<IAdvert> = ({ id }) => {
  const { deleteAdvert, stopAdvert, republishAdvert } = useActions();
  const actions: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Редактировать",
      onPress: () => console.log("1"),
      type: "default",
    },
    {
      id: "2",
      title: "Обновить актуальность",
      onPress: () => console.log("2"),
      type: "default",
    },
    {
      id: "3",
      title: status === "published" ? "Снять с публикации" : "Опубликовать",
      onPress: () =>
        status === "published" ? stopAdvert(id) : republishAdvert(id),
      type: "default",
    },
    {
      id: "4",
      title: "Удалить объявление",
      onPress: () => {
        deleteAdvert(id);
      },
      type: "destructive",
      confirmMessage: "Вы уверены, что хотите удалить объявление?",
    },
  ];

  const actionsForDeletedAdvert: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Восстановить объявление",
      onPress: () => {
        republishAdvert(id);
      },
      type: "default",
    },
    {
      id: "2",
      title: "Редактировать",
      onPress: () => console.log("1"),
      type: "default",
    },
  ];

  return (
    <View style={modalStyles.container}>
      <BottomSheet
        title="Выберите действие"
        actions={status === "deleted" ? actionsForDeletedAdvert : actions}
      />
    </View>
  );
};

export default MyModal;

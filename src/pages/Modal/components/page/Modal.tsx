import { FC } from "react";
import { View } from "react-native";
import { IModalProps } from "./types";
import { modalStyles } from "./styles";
import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { TSheetButtonProps } from "../../../../components/BottomSheet/types";
import { useActions } from "../../../../hooks/store/useActions";

const MyModal: FC<IModalProps> = ({ advertId }) => {
  const { deleteAdvert } = useActions();
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
      title: "Снять с публикации",
      onPress: () => console.log("3"),
      type: "default",
    },
    {
      id: "4",
      title: "Удалить объявление",
      onPress: () => {
        deleteAdvert(advertId);
      },
      type: "destructive",
      confirmMessage: "Вы уверены, что хотите удалить объявление?",
    },
  ];

  return (
    <View style={modalStyles.container}>
      <BottomSheet title="Выберите действие" actions={actions} />
    </View>
  );
};

export default MyModal;

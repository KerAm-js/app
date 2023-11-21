import { FC } from "react";
import { View } from "react-native";
import { IModalProps } from "./types";
import { modalStyles } from "./styles";
import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { TSheetButtonProps } from "../../../../components/BottomSheet/types";

const MyModal: FC<IModalProps> = ({ advertId }) => {
  const actions: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Обновить актуальность",
      onPress: () => console.log("1"),
      type: "default",
    },
    {
      id: "2",
      title: "Снять с публикации",
      onPress: () => console.log("2"),
      type: "default",
    },
    {
      id: "3",
      title: "Удалить объявление",
      onPress: () => console.log("3"),
      type: "destructive",
      confirmMessage: 'Вы уверены, что хотите удалить объявление?',
    },
  ];

  return (
    <View style={modalStyles.container}>
      <BottomSheet
        title="Редактирование статуса объявления"
        actions={actions}
      />
    </View>
  );
};

export default MyModal;

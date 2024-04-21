import { SvgXml } from "react-native-svg";
import { deleteCommentButtonStyles } from "./styles";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useActions } from "../../../../hooks/store/useActions";
import { Alert, TouchableOpacity } from "react-native";
import { trashSvg } from "../../../../assets/svg/trash";
import { RED } from "../../../../consts/colors";
import { IComment } from "../../../../types/Comment";

const DeleteCommentButton: FC<Pick<IComment, "id">> = ({ id }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { deleteComment } = useActions();

  const onPress = () => {
    Alert.alert("Удаление", "Вы уверены, что хотите удалить данный отзыв?", [
      {
        text: "Да",
        style: "destructive",
        onPress: () => {
          deleteComment(id);
          navigation.goBack();
        },
      },
      {
        text: "Отмена",
        style: "cancel",
      },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={deleteCommentButtonStyles.container}
    >
      <SvgXml xml={trashSvg(RED)} width={18} height={18} />
    </TouchableOpacity>
  );
};

export default DeleteCommentButton;

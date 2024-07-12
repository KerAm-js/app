import { SvgXml } from "react-native-svg";
import { deleteCommentButtonStyles } from "./styles";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { trashSvg } from "../../../../assets/svg/trash";
import { RED } from "../../../../consts/colors";
import { IComment } from "../../../../types/Comment";
import { useDeleteCommentMutation } from "../../../../modules/Comments/api/comments.api";
import { useAuth } from "../../../../hooks/store/useAuth";

const DeleteCommentButton: FC<Pick<IComment, "id">> = ({ id }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { token } = useAuth();
  const [deleteComment, result] = useDeleteCommentMutation();

  const onPress = () => {
    Alert.alert("Удаление", "Вы уверены, что хотите удалить данный отзыв?", [
      {
        text: "Да",
        style: "destructive",
        onPress: async () => {
          if (token) await deleteComment({ id, token });
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
      disabled={result.isLoading}
      style={deleteCommentButtonStyles.container}
    >
      {result.isLoading ? (
        <ActivityIndicator />
      ) : (
        <SvgXml xml={trashSvg(RED)} width={18} height={18} />
      )}
    </TouchableOpacity>
  );
};

export default DeleteCommentButton;

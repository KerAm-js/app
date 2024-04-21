import { View } from "react-native";
import RatingInput from "../RatingInput/RatingInput";
import { FC, useState } from "react";
import { ICommentFormModuleProps } from "./types";
import CommentInput from "../CommentInput/CommentInput";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { useActions } from "../../../../hooks/store/useActions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { RED } from "../../../../consts/colors";

const CommentFormModuleComponent: FC<ICommentFormModuleProps> = ({
  addresseeName,
  addresseeId,
  defaultComment,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { addComment, editComment } = useActions();
  const [rating, setRating] = useState<number>(defaultComment?.rate || 0);
  const [comment, setComment] = useState<string>(defaultComment?.text || "");

  const clearForm = () => {
    setRating(0);
    setComment("");
  };

  const onSubmit = () => {
    if (defaultComment) {
      editComment({ id: defaultComment.id, text: comment, rate: rating });
    } else {
      addComment({ addresseeId, addresseeName, text: comment, rate: rating });
    }
    clearForm();
    navigation.goBack();
  };

  const disabled = defaultComment
    ? rating === defaultComment.rate && comment === defaultComment.text
    : !rating;

  return (
    <View>
      <RatingInput
        username={addresseeName}
        rating={rating}
        setRating={setRating}
      />
      <CommentInput value={comment} onChangeText={setComment} />
      <BigButton
        title={defaultComment ? "Сохранить" : "Отправить"}
        onPress={onSubmit}
        disabled={disabled}
      />
    </View>
  );
};

export default CommentFormModuleComponent;

import { Alert, View } from "react-native";
import RatingInput from "../RatingInput/RatingInput";
import { FC, useEffect, useState } from "react";
import { ICommentFormModuleProps } from "./types";
import CommentInput from "../CommentInput/CommentInput";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { useAuth } from "../../../../hooks/store/useAuth";
import {
  useNewCommentMutation,
  useUpdateCommentMutation,
} from "../../../Comments/api/comments.api";

const CommentFormModuleComponent: FC<ICommentFormModuleProps> = ({
  addresseeName,
  addresseeId,
  defaultComment,
}) => {
  const { user, token } = useAuth();
  const [addComment, addCommentResult] = useNewCommentMutation();
  const [updateComment, updateCommentResult] = useUpdateCommentMutation();
  const [rating, setRating] = useState<number>(defaultComment?.rate || 0);
  const [comment, setComment] = useState<string>(defaultComment?.text || "");

  const clearForm = () => {
    setRating(0);
    setComment("");
  };

  const onSubmit = () => {
    if (user && token) {
      if (defaultComment) {
        updateComment({
          comment: { id: defaultComment.id, text: comment, rate: rating },
          token,
        });
      } else {
        addComment({
          comment: {
            addresseeId,
            text: comment,
            rate: rating,
            authorId: user.id,
          },
          token,
        });
        clearForm();
      }
    }
  };

  const disabled = defaultComment
    ? rating === defaultComment.rate && comment === defaultComment.text
    : !rating;

  useEffect(() => {
    if (addCommentResult.error) Alert.alert("Что пошло не так");
    if (addCommentResult.isSuccess) Alert.alert("Ваш отзыв успешно добавлен");
  }, [addCommentResult]);

  useEffect(() => {
    if (updateCommentResult.error) Alert.alert("Что пошло не так");
    if (updateCommentResult.isSuccess) Alert.alert("Изменения сохранены");
  }, [updateCommentResult]);

  return (
    <View>
      <RatingInput
        username={addresseeName}
        userId={addresseeId}
        rating={rating}
        setRating={setRating}
      />
      <CommentInput value={comment} onChangeText={setComment} />
      <BigButton
        title={defaultComment ? "Сохранить" : "Отправить"}
        onPress={onSubmit}
        disabled={
          disabled ||
          updateCommentResult.isLoading ||
          addCommentResult.isLoading
        }
        isLoading={
          defaultComment
            ? updateCommentResult.isLoading
            : addCommentResult.isLoading
        }
      />
    </View>
  );
};

export default CommentFormModuleComponent;

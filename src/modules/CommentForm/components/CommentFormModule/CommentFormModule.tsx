import { View } from "react-native";
import RatingInput from "../RatingInput/RatingInput";
import { FC, useState } from "react";
import { ICommentFormModuleProps } from "./types";
import CommentInput from "../CommentInput/CommentInput";
import { USER } from "../../../../consts/devData";
import { IComment } from "../../../../types/Comment";
import BigButton from "../../../../UI/buttons/Big/BigButton";

const CommentFormModuleComponent: FC<ICommentFormModuleProps> = ({
  username,
  id,
  defaultComment,
}) => {
  const [rating, setRating] = useState<number>(defaultComment?.rate || 0);
  const [comment, setComment] = useState<string>(defaultComment?.text || "");

  const submit = () => {
    const commentObj: Omit<IComment, "id" | "authorName"> = {
      rate: rating,
      text: comment,
      adresseeId: id,
      authorId: USER.id,
    };
    console.log(commentObj);
  };

  const disabled = defaultComment
    ? rating === defaultComment.rate && comment === defaultComment.text
    : !rating;

  return (
    <View>
      <RatingInput username={username} rating={rating} setRating={setRating} />
      <CommentInput value={comment} onChangeText={setComment} />
      <BigButton
        title={defaultComment ? "Сохранить" : "Отправить"}
        onPress={submit}
        disabled={disabled}
      />
    </View>
  );
};

export default CommentFormModuleComponent;

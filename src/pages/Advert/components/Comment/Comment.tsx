import { Text, View } from "react-native";
import { advertCommentStyles } from "./styles";
import { FC } from "react";
import { IAdvertCommentProps } from "./types";

const AdvertComment: FC<IAdvertCommentProps> = ({ comment, userId }) => {
  if (!comment) {
    return null;
  }
  return (
    <View style={advertCommentStyles.container}>
      <View style={advertCommentStyles.commentContainer}>
        <Text style={advertCommentStyles.title}>Комментарий</Text>
        <Text style={advertCommentStyles.text}>{comment}</Text>
      </View>
    </View>
  );
};

export default AdvertComment;

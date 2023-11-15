import TextAreaField from "../../../../UI/inputs/TextArea/TextAreaField";
import React, { FC } from "react";
import { ICommentInputProps } from "./types";
import Title from "../../../../UI/Title/Title";
import { View } from "react-native";
import { commentInputStyles } from "./styles";

const CommentInput: FC<ICommentInputProps> = ({ value, onChangeText }) => {
  return (
    <View style={commentInputStyles.inputContainer}>
      <TextAreaField
        value={value}
        onChangeText={onChangeText}
        placeholder="Напишите отзыв"
      />
    </View>
  );
};

export default CommentInput;

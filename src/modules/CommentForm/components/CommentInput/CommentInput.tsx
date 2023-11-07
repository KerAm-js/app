import TextAreaField from "../../../../UI/inputs/TextArea/TextAreaField";
import React, { FC } from "react";
import { ICommentInputProps } from "./types";
import Title from "../../../../UI/Title/Title";
import { View } from "react-native";
import { commentInputStyles } from "./styles";

const CommentInput: FC<ICommentInputProps> = ({ value, onChangeText }) => {
  return (
    <React.Fragment>
      <Title text="Напишите отзыв" />
      <View style={commentInputStyles.inputContainer}>
        <TextAreaField
          value={value}
          onChangeText={onChangeText}
          placeholder="Введите текст"
        />
      </View>
    </React.Fragment>
  );
};

export default CommentInput;

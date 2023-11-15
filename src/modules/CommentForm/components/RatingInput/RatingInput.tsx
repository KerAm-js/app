import React, { FC } from "react";
import { Text, View } from "react-native";
import Title from "../../../../UI/Title/Title";
import Avatar from "../../../../UI/Avatar/Avatar";
import Rating from "../../../../UI/Rating/Rating";
import { ratingInputStyles } from "./styles";
import { IRatingInputProps } from "./types";

const RatingInput: FC<IRatingInputProps> = ({
  username,
  rating,
  setRating,
}) => {
  return (
    <View style={ratingInputStyles.container}>
      <Avatar size={50} />
      <View style={ratingInputStyles.inputContainer}>
        <Text style={ratingInputStyles.username}>{username}</Text>
        <Rating type="button" rating={rating} setRating={setRating} />
        <Text style={ratingInputStyles.hint}>Нажмите, чтобы оценить</Text>
      </View>
    </View>
  );
};

export default RatingInput;

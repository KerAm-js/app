import { View } from "react-native";
import { ratingStyles } from "./styles";
import { FC, useState } from "react";
import { TRatingProps } from "./types";
import Star from "./Star";

const Rating: FC<TRatingProps> = ({ type, rating, backgroundColor }) => {
  const starIndexes = [1, 2, 3, 4, 5];
  const [ratingValue, setRatingValue] = useState(0);

  if (type === "button") {
    return (
      <View style={ratingStyles.container}>
        {starIndexes.map((index) => (
          <Star
            key={index}
            type="button"
            rating={ratingValue}
            setRating={setRatingValue}
            index={index}
          />
        ))}
      </View>
    );
  }

  return (
    <View style={ratingStyles.container}>
      {starIndexes.map((index) => (
        <Star
          key={index}
          type="presentation"
          rating={rating}
          index={index}
          backgroundColor={backgroundColor}
        />
      ))}
    </View>
  );
};

export default Rating;

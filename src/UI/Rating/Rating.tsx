import { View } from "react-native";
import { ratingStyles } from "./styles";
import { FC } from "react";
import { TRatingProps } from "./types";
import Star from "./Star";

const Rating: FC<TRatingProps> = ({
  type,
  rating,
  setRating,
  backgroundColor,
  size = 20,
}) => {
  const starIndexes = [1, 2, 3, 4, 5];
  const width = (size / 2.5) * 4 + size * 5;

  if (type === "button" && setRating) {
    return (
      <View style={[ratingStyles.container, { width }]}>
        {starIndexes.map((index) => (
          <Star
            key={index}
            type="button"
            rating={rating}
            setRating={setRating}
            index={index}
            size={size}
          />
        ))}
      </View>
    );
  }

  return (
    <View style={[ratingStyles.container, { width }]}>
      {starIndexes.map((index) => (
        <Star
          key={index}
          type="presentation"
          rating={rating}
          index={index}
          backgroundColor={backgroundColor}
          size={size}
        />
      ))}
    </View>
  );
};

export default Rating;

import { View } from "react-native";
import { ratingStyles } from "./styles";
import { FC, useState } from "react";
import { TRatingProps } from "./types";
import Star from "./Star";

const Rating: FC<TRatingProps> = ({
  type,
  rating,
  backgroundColor,
  size = 20,
}) => {
  const starIndexes = [1, 2, 3, 4, 5];
  const [ratingValue, setRatingValue] = useState(0);
  const width = (size / 2.5) * 4 + size * 5;

  if (type === "button") {
    return (
      <View style={[ratingStyles.container, { width }]}>
        {starIndexes.map((index) => (
          <Star
            key={index}
            type="button"
            rating={ratingValue}
            setRating={setRatingValue}
            index={index}
            size={size}
            containerWidth={width}
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
          containerWidth={width}
        />
      ))}
    </View>
  );
};

export default Rating;

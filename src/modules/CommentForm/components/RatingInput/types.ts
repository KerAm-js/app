import { TRatingProps } from "../../../../UI/Rating/types";

export interface IRatingInputProps
  extends Pick<TRatingProps, "rating" | "setRating"> {
  username: string;
}

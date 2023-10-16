export type TRatingProps = {
  rating: number;
  backgroundColor?: string;
  type: "button" | "presentation";
};

export interface IStarProps extends TRatingProps {
  setRating?: (rating: number) => void;
  index: number;
}

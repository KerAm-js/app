export type TRatingProps = {
  rating: number;
  backgroundColor?: string;
  type: "button" | "presentation";
  size?: number;
};

export interface IStarProps extends TRatingProps {
  setRating?: (rating: number) => void;
  index: number;
  size: number;
  containerWidth: number;
}

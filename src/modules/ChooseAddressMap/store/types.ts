import { Point } from "react-native-yamap";

export type TAddressByMapState = {
  point?: Point;
  pointAddress?: string;
  secondPoint?: Point;
  secondPointAddress?: string;
  isSecondPointRequired?: boolean;
  distance?: number;
};

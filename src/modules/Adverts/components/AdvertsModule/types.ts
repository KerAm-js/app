import { FlatListProps } from "react-native";
import { TAdvert } from "../../../../types/Advert";

export interface IAdvertsModuleProps
  extends Omit<
    FlatListProps<TAdvert>,
    "renderItem" | "keyExtractor"
  > {}

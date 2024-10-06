import { FlatListProps } from "react-native";
import { IAdvert } from "../../../../types/Advert";

export interface IAdvertsModuleProps
  extends Omit<
    FlatListProps<IAdvert>,
    "renderItem" | "keyExtractor"
  > {}

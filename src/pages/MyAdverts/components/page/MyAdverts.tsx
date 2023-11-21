import { Modal, Pressable, View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { FC } from "react";
import { IMyAdvertsPageProps } from "./types";
import { myAdvertsPageStyles } from "./styles";
import BottomSheet from "../BottomSheet/BottomSheet";

const MyAdvertsPageComponent: FC<IMyAdvertsPageProps> = ({ data }) => {
  return (
    <View style={myAdvertsPageStyles.container}>
      <AdvertsModule.Component data={data} />
    </View>
  );
};

export default MyAdvertsPageComponent;

import { ScrollView, View } from "react-native";
import PostAdvertModule from "../../../../modules/PostAdvert";
import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import { newAdvertPageStyles } from "./styles";

const NewAdvertPageComponent: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={newAdvertPageStyles.container}>
      <PostAdvertModule.Component advertType={advertType} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default NewAdvertPageComponent;

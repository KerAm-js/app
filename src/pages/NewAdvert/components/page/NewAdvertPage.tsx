import { ScrollView, View } from "react-native";
import PostAdvertModule from "../../../../modules/PostAdvert";
import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import { newAdvertPageStyles } from "./styles";

const NewAdvertPageComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  return (
    <ScrollView style={newAdvertPageStyles.container}>
      <PostAdvertModule.Component type={type} />
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default NewAdvertPageComponent;

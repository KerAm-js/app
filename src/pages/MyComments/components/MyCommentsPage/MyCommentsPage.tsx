import { View } from "react-native";
import CommentsModule from "../../../../modules/Comments";
import { myCommentsPageStyles } from "./styles";
import { FC } from "react";
import { IMyCommentsPageProps } from "./types";

const MyCommentsPageComponent: FC<IMyCommentsPageProps> = (props) => {
  return (
    <View style={myCommentsPageStyles.container}>
      <CommentsModule.Component {...props} isMyComments />
    </View>
  );
};

export default MyCommentsPageComponent;

import { View } from "react-native";
import { commentPageStyles } from "./styles";
import CommmentFormModule from "../../../../modules/CommentForm/index";
import { FC } from "react";
import { ICommentPageProps } from "./types";

const CommentPageComponent: FC<ICommentPageProps> = (props) => {
  return (
    <View style={commentPageStyles.container}>
      <CommmentFormModule.Component
        {...props}
      />
    </View>
  );
};

export default CommentPageComponent;
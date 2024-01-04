import { View } from "react-native";
import { commentPageStyles } from "./styles";
import CommmentFormModule from "../../../../modules/CommentForm/index";
import { FC } from "react";
import { ICommentPageProps } from "./types";

const CommentPageComponent: FC<ICommentPageProps> = ({
  username,
  userId,
  defaultComment,
}) => {
  return (
    <View style={commentPageStyles.container}>
      <CommmentFormModule.Component
        username={username}
        id={userId}
        defaultComment={defaultComment}
      />
    </View>
  );
};

export default CommentPageComponent;
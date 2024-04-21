import { FC } from "react";
import { View } from "react-native"
import CommentForm from "../../../../modules/CommentForm";
import { IComment } from "../../../../types/Comment";

const NewCommentPageComponent: FC<Pick<IComment, 'addresseeId' | 'addresseeName'>> = (props) => {
  return <View>
    <CommentForm.Component {...props} />
  </View>
}

export default NewCommentPageComponent;
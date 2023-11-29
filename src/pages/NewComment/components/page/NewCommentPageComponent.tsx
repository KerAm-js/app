import { FC } from "react";
import { View } from "react-native"
import { IUser } from "../../../../types/User";
import CommentForm from "../../../../modules/CommentForm";

const NewCommentPageComponent: FC<IUser> = ({ id, username }) => {
  return <View>
    <CommentForm.Component id={id} username={username} />
  </View>
}

export default NewCommentPageComponent;
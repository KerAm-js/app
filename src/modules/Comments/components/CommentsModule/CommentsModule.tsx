import { FlatList } from "react-native";
import Comment from "../Comment/Comment";
import { commentsModuleStyles } from "./styles";
import { FC } from "react";
import { ICommentsModuleProps } from "./types";

const CommentsModuleComponent: FC<ICommentsModuleProps> = ({
  user,
  userRole,
}) => {
  const comments = user.comments.filter((comment) => {
    return userRole === "adressee"
      ? comment.adresseeId === user.id
      : comment.authorId === user.id;
  });
  return (
    <FlatList
      style={commentsModuleStyles.container}
      data={comments}
      contentContainerStyle={commentsModuleStyles.contentContainer}
      renderItem={({ item }) => <Comment key={item.id} {...item} />}
    />
  );
};

export default CommentsModuleComponent;

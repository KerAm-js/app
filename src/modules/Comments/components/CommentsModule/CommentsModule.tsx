import { FlatList } from "react-native";
import { USER } from "../../../../consts/devData";
import Comment from "../Comment/Comment";
import { commentsModuleStyles } from "./styles";
import { FC } from "react";
import { ICommentsModuleProps } from "./types";
import { IComment } from "../../../../types/Comment";

const CommentsModuleComponent: FC<ICommentsModuleProps> = ({
  userId,
  userRole,
}) => {
  let comments: Array<IComment>;
  if (userId === USER.id) {
    comments = USER.comments.filter((comment) => {
      return userRole === "adressee"
        ? comment.adresseeId === USER.id
        : comment.authorId === USER.id;
    });
  } else {
    comments = []; // here we need api to get comments of/about any user
  }
  return (
    <FlatList
      style={commentsModuleStyles.container}
      data={comments}
      renderItem={({ item }) => <Comment key={item.id} {...item} />}
    />
  );
};

export default CommentsModuleComponent;

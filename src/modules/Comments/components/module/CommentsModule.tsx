import { FlatList } from "react-native";
import Comment from "../Comment/Comment";
import { commentsModuleStyles } from "./styles";
import { FC } from "react";
import { ICommentsModuleProps } from "./types";
import { useUserComments } from "../../../../hooks/store/useComments";

const CommentsModuleComponent: FC<ICommentsModuleProps> = ({
  user,
  userRole,
}) => {
  const comments = useUserComments({role: userRole, id: user.id, textOnly: true});
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

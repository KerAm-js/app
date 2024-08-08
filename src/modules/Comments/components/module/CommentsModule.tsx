import { Alert, FlatList } from "react-native";
import Comment from "../Comment/Comment";
import { commentsModuleStyles } from "./styles";
import { FC, useEffect } from "react";
import {
  useAllCommentsByAddresseIdQuery,
  useCurrentUserCommentsQuery,
} from "../../api/comments.api";
import { ICommentsModuleProps } from "./types";
import { useAuth } from "../../../../hooks/store/useAuth";

const CommentsModuleComponent: FC<ICommentsModuleProps> = ({ id, isMyComments }) => {
  const { token, user } = useAuth();
  const isCurrentUser = user?.id === id;

  const comments = useAllCommentsByAddresseIdQuery(id, { skip: isCurrentUser });

  const currUserComments = useCurrentUserCommentsQuery(token || "", {
    skip: !token || !isCurrentUser,
  });

  useEffect(() => {
    if (comments.error || currUserComments.error) {
      Alert.alert("Что-то пошло не так");
    }
  }, [comments.error, currUserComments.error]);

  return (
    <FlatList
      style={commentsModuleStyles.container}
      data={isCurrentUser ? currUserComments.data : comments.data}
      contentContainerStyle={commentsModuleStyles.contentContainer}
      renderItem={({ item }) => <Comment isMyComments={isMyComments} key={item.id} {...item} />}
    />
  );
};

export default CommentsModuleComponent;

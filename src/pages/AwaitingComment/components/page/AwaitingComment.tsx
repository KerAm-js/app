import { FC } from "react";
import { FlatList, View } from "react-native";
import { IAwaitingCommentPageProps } from "./types";
import { awaitingCommentPageStyles } from "./styles";
import UserCard from "../../../../components/UserCard/UserCard";

const AwaitingCommentPageComponent: FC<IAwaitingCommentPageProps> = ({
  users,
}) => {
  return (
    <View style={awaitingCommentPageStyles.container}>
      <FlatList
        data={users}
        contentContainerStyle={awaitingCommentPageStyles.contentContainer}
        renderItem={({ item }) => <UserCard key={item.phone} {...item} />}
      />
    </View>
  );
};

export default AwaitingCommentPageComponent;

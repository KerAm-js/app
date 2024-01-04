import { View } from "react-native";
import CommentsModule from "../../../../modules/Comments";
import { FC } from "react";
import { ICommentsModuleProps } from "../../../../modules/Comments/components/module/types";
import { userCommentsStyles } from "./styles";

const UserCommentsPageComponent: FC<ICommentsModuleProps> = (props) => {
  return (
    <View style={userCommentsStyles.container}>
      <CommentsModule.Component {...props} />
    </View>
  );
};

export default UserCommentsPageComponent;

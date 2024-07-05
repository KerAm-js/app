import { Text, View } from "react-native";
import Avatar from "../../../../UI/Avatar/Avatar";
import { SvgXml } from "react-native-svg";
import { commentCornerSvg } from "../../../../assets/svg/commentCorner";
import { advertCommentStyles } from "./styles";
import { FC } from "react";
import { IAdvertCommentProps } from "./types";

const AdvertComment: FC<IAdvertCommentProps> = ({ comment, userId }) => {
  if (!comment) {
    return null;
  }
  return (
    <View style={advertCommentStyles.container}>
      <Avatar size={26} userId={userId} />
      <SvgXml
        style={advertCommentStyles.commentCorner}
        xml={commentCornerSvg()}
        width={14}
        height={14}
      />
      <View style={advertCommentStyles.commentContainer}>
        <Text style={advertCommentStyles.text}>{comment}</Text>
      </View>
    </View>
  );
};

export default AdvertComment;

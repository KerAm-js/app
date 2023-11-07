import { View } from "react-native";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { BLUE } from "../../../../consts/colors";
import { pencilSvg } from "../../../../assets/svg/pencil";
import { commentsStyles } from "./styles";

const Comments = () => {
  return (
    <View style={commentsStyles.container}>
      <BigButton
        onPress={() => console.log("pressed")}
        iconXmlFunc={pencilSvg}
        title="Написать отзыв"
        backgroundColor={BLUE}
      />
    </View>
  );
};

export default Comments;

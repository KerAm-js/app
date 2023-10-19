import { Pressable, Text, View } from "react-native";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { BLUE } from "../../../../consts/colors";
import { pencilSvg } from "../../../../assets/svg/pencil";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../../../../assets/svg/arrowRight";
import { commentsStyles } from "./styles";

const Comments = () => {
  return (
    <View style={commentsStyles.container}>
      <Pressable
        style={commentsStyles.button}
        onPress={() => console.log("pressed")}
      >
        <Text style={commentsStyles.buttonTitle}>Все отзывы</Text>
        <SvgXml xml={arrowRightSvg(BLUE)} width={10} height={10} />
      </Pressable>
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

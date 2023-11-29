import { View } from "react-native";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { BLUE } from "../../../../consts/colors";
import { pencilSvg } from "../../../../assets/svg/pencil";
import { commentsStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { FC } from "react";
import { IUser } from "../../../../types/User";

const Comments: FC<IUser> = (user) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => navigation.navigate("NewComment", user)

  return (
    <View style={commentsStyles.container}>
      <BigButton
        onPress={onPress}
        iconXmlFunc={pencilSvg}
        title="Написать отзыв"
        backgroundColor={BLUE}
      />
    </View>
  );
};

export default Comments;

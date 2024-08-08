import { NativeSyntheticEvent, Pressable, Text, View } from "react-native";
import { commentStyles } from "./styles";
import { SvgXml } from "react-native-svg";
import Avatar from "../../../../UI/Avatar/Avatar";
import { FC, useRef, useState } from "react";
import { ICommentProps } from "./types";
import { boxOutSvg } from "../../../../assets/svg/boxOut";
import { boxInSvg } from "../../../../assets/svg/boxIn";
import Rating from "../../../../UI/Rating/Rating";
import { WHITE } from "../../../../consts/colors";
import { arrowRightSvg } from "../../../../assets/svg/arrowRight";
import { TextLayoutEventData } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useAuth } from "../../../../hooks/store/useAuth";

const Comment: FC<ICommentProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user } = useAuth();
  const { addresseeId, addresseeName, authorId, authorName, rate, isMyComments } = props;
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(
    undefined
  );
  const [readMoreShown, setReadMoreShown] = useState(Boolean);
  const commentText = useRef<null | Text>(null);
  const isFirstLayout = useRef<boolean>(true);

  const isUserAdressee = addresseeId === user?.id;
  const isUserAuthor = authorId === user?.id;

  const onTextLayout = (event: NativeSyntheticEvent<TextLayoutEventData>) => {
    if (event.nativeEvent.lines.length > 2 && isFirstLayout.current) {
      setNumberOfLines(2);
      setReadMoreShown(true);
      isFirstLayout.current = false;
    }
  };

  const showMore = () => {
    setNumberOfLines((numberOfLines) => (!numberOfLines ? 2 : undefined));
  };

  const navigateToEdition = () => {
    if (isUserAuthor)
      navigation.navigate("Comment", {
        addresseeId,
        addresseeName,
        defaultComment: props,
      });
  };

  return (
    <View style={commentStyles.container}>
      <Pressable onPress={navigateToEdition} style={commentStyles.card}>
        <View style={commentStyles.topContainer}>
          <Avatar size={36} userId={isMyComments ? addresseeId : authorId} />
          <View style={commentStyles.infoContainer}>
            <View style={commentStyles.usernameContainer}>
              <Text style={commentStyles.username}>
                {isMyComments ? addresseeName : authorName}
              </Text>
              {/* {(isUserAuthor) && (
                <SvgXml
                  xml={isUserAuthor ? boxOutSvg() : boxInSvg()}
                  width={16}
                  height={16}
                />
              )} */}
            </View>
            <View style={commentStyles.rateContainer}>
              <Text style={commentStyles.rateInfo}>
                {isUserAuthor ? "Ваша оценка" : "Оценка пользователя"}
              </Text>
              <Rating
                type="presentation"
                rating={rate}
                backgroundColor={WHITE}
                size={12}
              />
            </View>
          </View>
          {isUserAuthor && (
            <SvgXml xml={arrowRightSvg()} width={14} height={14} />
          )}
        </View>
        <Text
          ref={commentText}
          numberOfLines={numberOfLines}
          style={commentStyles.text}
          onTextLayout={onTextLayout}
        >
          "{props.text}"
        </Text>
        {!!readMoreShown && (
          <Pressable onPress={showMore}>
            <Text style={commentStyles.moreButton}>
              {!!numberOfLines ? "Читать полностью" : "Скрыть"}
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default Comment;

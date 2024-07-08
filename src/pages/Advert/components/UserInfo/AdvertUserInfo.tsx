import { Linking, Text, View } from "react-native";
import Avatar from "../../../../UI/Avatar/Avatar";
import { advertUserInfoStyles } from "./styles";
import { GREEN, GREY_LIGHT } from "../../../../consts/colors";
import Rating from "../../../../UI/Rating/Rating";
import { FC } from "react";
import { IUser } from "../../../../types/User";
import Link from "../../../../UI/buttons/Link/Link";
import BigButton from "../../../../UI/buttons/Big/BigButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useUserComments } from "../../../../hooks/store/useComments";
import { useAuth } from "../../../../hooks/store/useAuth";
import { toPhoneFormat } from "../../../../helpers/toPhoneFormat";

const AdvertUserInfo: FC<IUser> = (props) => {
  const { id, rating, username, phone } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {user} = useAuth();
  const rates = useUserComments({
    role: "addressee",
    id,
  });

  const call = () => {
    Linking.openURL(`tel:+${phone}`);
  };

  const goToComments = () => {
    navigation.navigate("User", props);
  };

  return (
    <>
      <View style={advertUserInfoStyles.container}>
        <Avatar size={50} userId={id} />
        <Text style={advertUserInfoStyles.username}>{username}</Text>
        <View style={advertUserInfoStyles.ratingContainer}>
          <Rating
            rating={rating}
            size={12}
            type="presentation"
            backgroundColor={GREY_LIGHT}
          />
          <Text style={advertUserInfoStyles.ratingText}>
            Рейтинг {rating} (количество оценок {rates.length})
          </Text>
        </View>
        <Text style={advertUserInfoStyles.phone}>{toPhoneFormat(phone)}</Text>
        {props.id !== user?.id && (
          <Link title={"Профиль"} onPress={goToComments} />
        )}
      </View>
      <BigButton backgroundColor={GREEN} title="Позвонить" onPress={call} />
    </>
  );
};

export default AdvertUserInfo;

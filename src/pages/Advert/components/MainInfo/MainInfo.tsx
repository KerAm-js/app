import { FC } from "react";
import { Text, View } from "react-native";
import { IMainInfoProps } from "./types";
import { mainInfoStyles } from "./style";
import { getRelevanceObj } from "../../../../modules/Adverts/helpers/getRelevance";
import { SvgXml } from "react-native-svg";
import { eyeSvg } from "../../../../assets/svg/eye";
import { likeFillSvg } from "../../../../assets/svg/likeFill";
import { GREY_DARK } from "../../../../consts/colors";

const MainInfo: FC<IMainInfoProps> = ({
  title,
  price,
  likes,
  views,
  updatedAt,
}) => {
  const payment =
    price.paymentType === "Любой" ? "нал/безнал" : price.paymentType;

  const relevance = getRelevanceObj(updatedAt);

  return (
    <View style={mainInfoStyles.container}>
      <Text style={mainInfoStyles.title}>{title}</Text>
      <View style={mainInfoStyles.rowsContainer}>
        <View style={mainInfoStyles.row}>
          <Text style={mainInfoStyles.price}>
            {price.price + " руб за " + price.paymentFor}
          </Text>
          <Text style={mainInfoStyles.infoText}>{payment}</Text>
        </View>
        <View style={mainInfoStyles.row}>
          <Text style={[mainInfoStyles.infoText, { color: relevance.color }]}>
            Обновлено {relevance.string} назад
          </Text>
          <View style={mainInfoStyles.advertInfoContainer}>
            <SvgXml xml={eyeSvg(GREY_DARK)} width={12} height={12} />
            <Text style={mainInfoStyles.advertInfo}>{views.length}</Text>
            <SvgXml xml={likeFillSvg(GREY_DARK)} width={12} height={12} />
            <Text style={mainInfoStyles.advertInfo}>{likes.length}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainInfo;

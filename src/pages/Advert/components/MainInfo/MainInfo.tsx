import { FC } from "react";
import { Text, View } from "react-native";
import { mainInfoStyles } from "./style";
import { getRelevanceObj } from "../../../../modules/Adverts/helpers/getRelevance";
import { SvgXml } from "react-native-svg";
import { eyeSvg } from "../../../../assets/svg/eye";
import { likeFillSvg } from "../../../../assets/svg/likeFill";
import { GREY_DARK } from "../../../../consts/colors";
import { TRANSACTION_TYPE_TITLE } from "../../../../consts/data";
import { getPriceString } from "../../../../modules/Adverts/helpers/getPaymentFor";
import { Advert } from "../../../../types/Advert";

const MainInfo: FC<Advert> = (props) => {
  const { title, paymentType, likes, views, updatedAt, transactionType } = props;
  const payment =
    paymentType === "ANY" ? "нал/безнал" : paymentType;

  const relevance = getRelevanceObj(updatedAt);

  const priceString = getPriceString(props);

  return (
    <View style={mainInfoStyles.container}>
      <Text style={mainInfoStyles.title}>{title}</Text>
      <Text style={mainInfoStyles.subtitle}>
        {TRANSACTION_TYPE_TITLE[transactionType]}
      </Text>
      <View style={mainInfoStyles.rowsContainer}>
        <View style={mainInfoStyles.row}>
          <View style={mainInfoStyles.pricesContainer}>
            <Text style={mainInfoStyles.price}>
              {priceString.first[0]}
              {priceString.first[1]}
            </Text>
            {priceString.second && (
              <Text style={mainInfoStyles.price}>
                {priceString.second[0]}
                {priceString.second[1]}
              </Text>
            )}
          </View>
          <Text style={[mainInfoStyles.infoText, { alignSelf: "flex-start" }]}>
            {payment}
          </Text>
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

import { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { infoTablesStyles } from "./styles";
import { TAdvert } from "../../../../types/Advert";
import { propTitles } from "../../../../consts/propTitles";

const InfoTables: FC<TAdvert> = ({ type, general, params }) => {
  const getArrFromObj = (
    obj: { [key: string]: number | string | any },
    arr: Array<[string, string | number]>
  ) => {
    for (let key in obj) {
      if (typeof obj[key] !== "string" && typeof obj[key] !== "number") {
        getArrFromObj(obj[key], arr);
      } else {
        arr.push([key, obj[key]]);
      }
    }
  };

  const paramsArr = useMemo(() => {
    const result: Array<[string, string]> = Object.entries(params);
    return result;
  }, []);

  const rentalPeriod =
    type === "technic"
      ? general.rentalPeriod
        ? new Date(general.rentalPeriod.from)
            .toLocaleDateString()
            .replaceAll("/", ".") +
          " - " +
          new Date(general.rentalPeriod.to)
            .toLocaleDateString()
            .replaceAll("/", ".")
        : general.rentalDaysCount + " дней"
      : undefined;

  return (
    <View style={infoTablesStyles.container}>
      <View style={infoTablesStyles.table}>
        <Text style={infoTablesStyles.title}>Характеристики</Text>
        {paramsArr.map(([title, value]) => {
          if (!propTitles[title] || !value) {
            return null;
          }
          let titleString = propTitles[title].title;
          let valueString = value;
          if (title === "amount" && type !== "technic") {
            if (params.measure === "weight") {
              titleString = "Вес";
              valueString += " т";
            } else {
              titleString = "Объём";
              valueString += " м3";
            }
          } else if (propTitles[title]?.measurement) {
              valueString += " " + propTitles[title].measurement;
          }
          return (
            <View key={title} style={infoTablesStyles.tableRow}>
              <Text style={infoTablesStyles.rowTitle}>{titleString}</Text>
              <Text style={infoTablesStyles.rowValue}>{valueString}</Text>
            </View>
          );
        })}
      </View>
      <View style={infoTablesStyles.table}>
        <Text style={infoTablesStyles.title}>Общие данные</Text>
        <View style={infoTablesStyles.tableRow}>
          <Text style={infoTablesStyles.rowTitle}>Режим работы</Text>
          <Text style={infoTablesStyles.rowValue}>{general.workMode}</Text>
        </View>
        {!!rentalPeriod && (
          <View style={infoTablesStyles.tableRow}>
            <Text style={infoTablesStyles.rowTitle}>Срок аренды</Text>
            <Text style={infoTablesStyles.rowValue}>{rentalPeriod}</Text>
          </View>
        )}
        {type === "technic" && !!general.count && (
          <View style={infoTablesStyles.tableRow}>
            <Text style={infoTablesStyles.rowTitle}>Количество единиц</Text>
            <Text style={infoTablesStyles.rowValue}>{general.count}</Text>
          </View>
        )}
        {type === "technic" && !!general.distance && (
          <View style={infoTablesStyles.tableRow}>
            <Text style={infoTablesStyles.rowTitle}>Плечо перевозки</Text>
            <Text style={infoTablesStyles.rowValue}>{general.distance}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default InfoTables;

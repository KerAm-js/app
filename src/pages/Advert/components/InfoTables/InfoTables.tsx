import { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { infoTablesStyles } from "./styles";
import { TAdvert } from "../../../../types/Advert";

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
    let arr: Array<[string, string | number]> = [];
    const obj = { ...params, photos: undefined, type: undefined };
    getArrFromObj(obj, arr);
    return arr;
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
        {paramsArr.map(([title, value]) => (
          <View key={title} style={infoTablesStyles.tableRow}>
            <Text style={infoTablesStyles.rowTitle}>{title}</Text>
            <Text style={infoTablesStyles.rowValue}>{value}</Text>
          </View>
        ))}
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

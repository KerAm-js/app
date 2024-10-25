import { FC } from "react";
import { View } from "react-native";
import { infoTablesStyles } from "./styles";
import { IAdvert } from "../../../../types/Advert";
import { Table, TableProps, TableRowData } from "./Table";
import { TECHNIC_PARAMS } from "../../../../consts/data";
import { ENUM_TITLES } from "../../../../consts/enums";
import { propTitles } from "../../../../consts/propTitles";

const InfoTables: FC<IAdvert> = (advert) => {
  const chars: TableProps = { title: "Характеристики", data: [] };
  const general: TableProps = { title: "Общие данные", data: [] };

  if (advert.advertType === "TECHNIC") {
    for (let key in TECHNIC_PARAMS) {
      const param = key as keyof typeof TECHNIC_PARAMS;
      const title = TECHNIC_PARAMS[param]?.title;
      const value = advert[param];
      if (title && value !== "NOT_SPECIFIED" && value !== 0 && !!value) {
        let data: TableRowData;
        if (param === "OSSIG") {
          //OSSIG
          data = {
            title,
            value: advert[param] ? "Подключён" : "Не подключён",
          };
        } else if (typeof value !== "boolean" && value in ENUM_TITLES) {
          data = {
            title,
            value: ENUM_TITLES[value as keyof typeof ENUM_TITLES],
          };
        } else {
          const measurement = TECHNIC_PARAMS[param]?.measurement;
          data = {
            title,
            value: value + (measurement ? " " + measurement : ""),
          };
        }
        chars.data.push(data);
      }
    }
    general.data.push({
      title: propTitles.shiftType,
      value: ENUM_TITLES[advert.shiftType],
    });
    const rentalPeriod =
      new Date(advert.rentalFrom).toLocaleDateString().replaceAll("/", ".") +
      " - " +
      new Date(advert.rentalTo).toLocaleDateString().replaceAll("/", ".");

    general.data.push({
      title: propTitles.rentalPeriod,
      value: rentalPeriod,
    });
    general.data.push({
      title: propTitles.rentalDaysCount,
      value: advert.rentalDaysCount,
    });
  }
  if (advert.advertType === "DUMP") {
    chars.data.push({
      title: propTitles.shiftType,
      value: ENUM_TITLES[advert.shiftType],
    });
    general.data.push({
      title: propTitles.shiftType,
      value: advert.shiftType,
    });
  }
  if (advert.advertType === "NON_MATERIAL") {
    general.data.push({
      title: propTitles.shiftType,
      value: advert.shiftType,
    });
    general.data.push({
      title: propTitles.delivery,
      value: advert.deliveryType,
    });
  }

  return (
    <View style={infoTablesStyles.container}>
      <Table {...chars} />
      <Table {...general} />
    </View>
  );
};

export default InfoTables;

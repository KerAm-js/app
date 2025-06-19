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
  general.data.push({
    title: propTitles.shiftType,
    value: ENUM_TITLES[advert.shiftType],
  });
  if (advert.advertType === "TECHNIC") {
    for (let key in TECHNIC_PARAMS) {
      const param = key as keyof typeof TECHNIC_PARAMS;
      const title = TECHNIC_PARAMS[param]?.title;
      const value = advert[param];
      if (
        title &&
        value !== "NOT_SPECIFIED" &&
        value !== 0 &&
        !!value &&
        !(param === "productionYear" && value === 1960)
      ) {
        let data: TableRowData;
        if (param === "ossig") {
          data = {
            title,
            value: advert[param] ? "Подключён" : "Не подключён",
          };
        } else if (typeof value === "string" && value in ENUM_TITLES) {
          data = {
            title,
            value: ENUM_TITLES[value as keyof typeof ENUM_TITLES],
          };
        } else {
          const measurement = TECHNIC_PARAMS[param]?.measurement;
          data = {
            title,
            value: value + (measurement ? " (" + measurement + ")" : ""),
          };
        }
        chars.data.push(data);
      }
    }
    if (advert.rentalFrom && advert.rentalTo) {
      const rentalPeriod =
        new Date(advert?.rentalFrom || "")
          .toLocaleDateString()
          .replaceAll("/", ".") +
        " - " +
        new Date(advert?.rentalTo || "")
          .toLocaleDateString()
          .replaceAll("/", ".");

      general.data.push({
        title: propTitles.rentalPeriod,
        value: rentalPeriod,
      });
    }

    general.data.push({
      title: propTitles.rentalDaysCount,
      value: advert.rentalDaysCount + ' (дн)',
    });
    console.log(advert.id)
    if (advert.isTransport) {
      general.data.push({
        title: propTitles.distance,
        value: advert.distance + ' (км)',
      });
      if (advert.transactionType === 'TAKE_A_RENT') {
        general.data.push({
          title: propTitles.cargoVolume,
          value: advert.cargoVolume + ' (м3)',
        });
        general.data.push({
          title: propTitles.cargoType,
          value: advert.materialType,
        });
      }
    }
  } else {
    chars.data.push({
      title: propTitles.dumpTransport,
      value: advert.dumpTransport.reduce(
        (value, item, index) => value + (index === 0 ? "" : ", ") + item.name,
        ""
      ),
    });
    chars.data.push({
      title: propTitles.coefficient,
      value: advert.coefficient,
    });
    const measurement =
      TECHNIC_PARAMS[advert.measureIn === "WEIGHT" ? "weight" : "volume"]
        ?.measurement;
    chars.data.push({
      title: ENUM_TITLES[advert.measureIn],
      value: advert.amount + " " + measurement || "",
    });
  }
  if (advert.advertType === "DUMP") {
    chars.data.push({
      title: propTitles.wasteTypes,
      value: advert.wasteTypes.reduce(
        (value, item, index) => value + (index === 0 ? "" : ", ") + item.name,
        ""
      ),
    });
    chars.data.push({
      title: propTitles.dangerClass,
      value: ENUM_TITLES[advert.dangerClass],
    });
  }
  if (advert.advertType === "NON_MATERIAL") {
    chars.data.push({
      title: propTitles.materialType,
      value: advert.materialType,
    });
    general.data.push({
      title: propTitles.deliveryType,
      value: ENUM_TITLES[advert.deliveryType],
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

import { Text, View } from "react-native";
import { infoTablesStyles } from "./styles";
import { FC } from "react";

export type TableRowData = { title: string; value: number | string }

export type TableProps = {
  title: string;
  data: Array<TableRowData>;
};

export const Table: FC<TableProps> = ({ title, data }) => {
  return (
    <View style={infoTablesStyles.table}>
      <Text style={infoTablesStyles.title}>{title}</Text>
      {data.map((item) => (
        <View key={item.title} style={infoTablesStyles.tableRow}>
          <Text style={infoTablesStyles.rowTitle}>{item.title}</Text>
          <Text style={infoTablesStyles.rowValue}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

import { StyleSheet } from "react-native";
import { SMALL_F_SIZE, TEXT_F_SIZE } from "../../../../consts/texts";
import { BORDER_RADIUS_SMALL } from "../../../../consts/borders";
import { GREY_DARK, WHITE } from "../../../../consts/colors";
import { SCREEN_PADDING } from "../../../../consts/views";

export const infoTablesStyles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_PADDING,
  },
  table: {
    borderRadius: BORDER_RADIUS_SMALL,
    padding: 12,
    paddingBottom: 10,
    paddingTop: 15,
    backgroundColor: WHITE,
    marginBottom: 15,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Bold",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 7,
  },
  rowTitle: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    color: GREY_DARK,
    flex: 1,
  },
  rowValue: {
    fontSize: SMALL_F_SIZE,
    fontFamily: "Gilroy-Medium",
    flex: 1,
  },
});

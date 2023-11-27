import { StyleSheet } from "react-native";
import { LABEL_F_SIZE, TEXT_F_SIZE, TITLE_F_SIZE, ULTRA_SMALL_F_SIZE } from "../../../../consts/texts";
import { SCREEN_PADDING } from "../../../../consts/views";
import { GREY_DARK, GREY_MIDDLE } from "../../../../consts/colors";

export const mainInfoStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  title: {
    fontSize: TITLE_F_SIZE,
    fontFamily: 'Gilroy-Bold',
    paddingHorizontal: SCREEN_PADDING,
  },
  rowsContainer: {
    marginVertical: 15,
    paddingHorizontal: SCREEN_PADDING,
    borderTopColor: GREY_MIDDLE,
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: GREY_MIDDLE,
    borderBottomWidth: 1,
    minHeight: 40,
  },
  price: {
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Medium',
  },
  infoText: {
    fontSize: LABEL_F_SIZE,
    fontFamily: 'Gilroy-Semibold',
  },
  advertInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  advertInfo: {
    marginLeft: 4,
    marginRight: 7,
    fontSize: ULTRA_SMALL_F_SIZE,
    color: GREY_DARK,
    fontFamily: "Gilroy-Medium",
    marginTop: 1
  },
})
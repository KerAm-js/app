import { StyleSheet } from "react-native";
import { BLUE, GREY_LIGHT } from "../../../../consts/colors";
import { TEXT_F_SIZE } from "../../../../consts/texts";

export const profileNavigationStyles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: 10,
    paddingBottom: 70,
    backgroundColor: GREY_LIGHT
  },
  supportButton: {
    marginTop: 20,
  },
  supportButtonTitle: {
    color: BLUE,
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Semibold',
    textAlign: 'center',
  },
});

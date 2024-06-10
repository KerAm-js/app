import { StyleSheet } from "react-native";
import { BLUE, GREY_LIGHT, RED } from "../../../../consts/colors";
import { TEXT_F_SIZE } from "../../../../consts/texts";

export const profileNavigationStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingBottom: 70,
    backgroundColor: GREY_LIGHT
  },
  groupButtonsContainer: {
    gap: 10,
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
  },
  supportButton: {
    marginTop: 12,
  },
  logoutButtonTitle: {
    color: RED,
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Semibold',
    textAlign: 'center',
  },
  supportButtonTitle: {
    color: BLUE,
    fontSize: TEXT_F_SIZE,
    fontFamily: 'Gilroy-Semibold',
    textAlign: 'center',
  },
});

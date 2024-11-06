import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  btnIcon: {
    width: 24,
    height: 24,
  },
  menuContainer: {
    position: "absolute",
    top: 50,
    right: 0,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1, 
  },
  menuItem: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
  },
  menuItemText: {
    color: COLORS.black,
  },
});

export default styles;

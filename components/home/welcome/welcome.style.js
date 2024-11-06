import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.xLarge,
  },
  userName: {
    fontSize: SIZES.xxLarge, 
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  welcomeMessage: {
    fontSize: SIZES.large, 
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.medium,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.medium,
  },
  searchWrapper: {
    flex: 1,
  },
  searchInput: {
    fontSize: SIZES.large, 
    fontFamily: FONT.regular,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    color: COLORS.darkText,
  },
  searchBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  tabsContainer: {
    marginTop: SIZES.large,
    paddingHorizontal: SIZES.large,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: activeJobType === item ? COLORS.primary : COLORS.lightGray,
    marginRight: SIZES.small,
    shadowColor: activeJobType === item ? COLORS.primary : "transparent",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }),
  tabText: (activeJobType, item) => ({
    fontSize: SIZES.medium, 
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.white : COLORS.darkGray,
    textAlign: "center",
  }),
});

export default styles;

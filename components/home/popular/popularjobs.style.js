import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.medium,
    paddingVertical: SIZES.large,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    letterSpacing: 0.5,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    textDecorationLine: "underline",
  },
  cardsContainer: {
    marginTop: SIZES.small,
  },
  flatListContent: {
    gap: SIZES.medium,
    paddingBottom: SIZES.medium,
  },
  errorText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.red,
    textAlign: "center",
    marginTop: SIZES.medium,
  },
});

export default styles;

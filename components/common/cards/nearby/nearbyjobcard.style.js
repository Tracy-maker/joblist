import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.medium,
    borderRadius: SIZES.large,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    ...SHADOWS.medium,
    shadowColor: COLORS.darkGray,
    marginVertical: SIZES.small,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    overflow: "hidden",
    borderColor: COLORS.primary,
    borderWidth: 1,
    ...SHADOWS.light,
  },
  logImage: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginLeft: SIZES.medium,
    justifyContent: "center",
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.primary,
    marginBottom: 4,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.secondary,
    backgroundColor: COLORS.primaryLight,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: SIZES.small,
    textAlign: "center",
  },
});

export default styles;

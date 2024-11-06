import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 280, // 增加卡片宽度
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.large,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFFFFF",
    marginVertical: SIZES.small,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: SIZES.small,
  }),
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.medium, // 增加底部间距
  },
  logoImage: {
    width: "75%",
    height: "75%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    marginBottom: SIZES.small,
  },
  infoContainer: {
    marginTop: SIZES.small,
    width: "100%",
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? "#FFFFFF" : COLORS.primary,
    marginBottom: SIZES.small / 2,
  }),
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  publisher: (selectedJob, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: selectedJob === item.job_id ? "#FFFFFF" : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginLeft: 5,
  },
});

export default styles;

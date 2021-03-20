import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // padding: 40,
    backgroundColor: "#8257e5",
    minHeight: "44%",
  },
  topBar: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#774DD6",
    padding: 33,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#6842C2",
  },
  header: {
    flexDirection: "row",
    // alignItems: "center",
    // paddingHorizontal: 32,
    justifyContent: "space-between",
    // paddingBottom: 80,
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 24,
    // lineHeight: 32,
    maxWidth: 245,
    marginBottom: 16,
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#D4C2FF",
    maxWidth: 245,
  },
  headerText: {
    color: "#D4C2FF",
    fontSize: 16,
    fontFamily: "Archivo_500Medium",
  },
  content: {
    paddingHorizontal: 32,
  },
});

export default styles;

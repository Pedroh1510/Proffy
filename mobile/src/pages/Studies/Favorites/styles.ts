import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
    height: "100%",
  },
  header: {
    backgroundColor: "#8257E5",
    minHeight: 130,
  },
  headerContent: {
    marginTop: 10,
    paddingHorizontal: 32,
  },
  headerContentVisible: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 24,
    // lineHeight: 32,
    maxWidth: 245,
    marginBottom: 16,
  },
  teacherList: {
    marginTop: -40,
    paddingHorizontal: 16,
  },
});

export default styles;

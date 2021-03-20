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
    maxWidth: 245,
    marginBottom: 16,
  },
  headerSubtitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#D4C2FF",
    maxWidth: 245,
  },
  teacherList: {
    marginTop: -40,
    paddingHorizontal: 16,
  },
  searchForm: {
    marginBottom: 64,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBlock: {
    width: "48%",
  },
  submitButton: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },
  buttonSearch: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

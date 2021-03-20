import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  subTimeContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FAFAFC",
    borderWidth: 1,
    borderColor: "#E6E6F0",
    borderRadius: 8,
    marginBottom: 8,
  },
  timeContainerText: {
    fontFamily: "Archivo_700Bold",
    color: "#6A6180",
    fontSize: 16,
    width: 70,
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    minWidth: 150,
  },
  text: {
    color: "#9C98A6",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#FAFAFC",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E6E6F0",
    color: "#6A6180",
    height: 36,
    // paddingHorizontal: 18,
    // width: 100,
    justifyContent: "center",
    // alignSelf: "flex-end",
  },
  dropdown: {
    backgroundColor: "#9C98A6",
    color: "#FAFAFC",
    // paddingHorizontal: 18,
  },
  dropdownItem: {
    justifyContent: "flex-start",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#6A6180",
  },
  dropdownItemActive: {
    backgroundColor: "#EBEBF5",
  },
});

export { styles };

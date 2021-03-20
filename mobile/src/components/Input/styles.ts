import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    minWidth: 150,
  },
  content: {
    marginTop: -10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    backgroundColor: "#FFFFFF",
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
    paddingHorizontal: 18,
  },
  textArea: {
    // height: 150,
    // justifyContent: "flex-start",
    textAlignVertical: "top",
    // alignItems: "flex-start",
    backgroundColor: "#FAFAFC",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E6E6F0",
    color: "#6A6180",
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
});

export { styles };

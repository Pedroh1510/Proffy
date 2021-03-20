import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    marginTop: -30,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    color: "#32264D",
    fontSize: 24,
    // marginBottom: 12,
  },
  register: {
    fontFamily: "Poppins_400Regular",
    color: "#8257E5",
    fontSize: 12,
  },

  inputText: {
    backgroundColor: "#FAFAFC",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    height: 54,
    padding: 20,
  },
  containerPass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FAFAFC",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    marginBottom: 12,
    paddingRight: 20,
  },
  inputTextPass: {
    marginVertical: 10,
    marginLeft: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCE5",
    borderRadius: 8,
    height: 56,
  },
  lembrar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };

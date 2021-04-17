import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    padding: 32,
  },
  topBar: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 21,
  },
  topBarButton: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    color: "#32264D",
    fontSize: 32,
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    color: "#6A6180",
    fontSize: 14,
  },
  register: {
    marginTop: 100,
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
  inputTextMiddle: {
    backgroundColor: "#FAFAFC",
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
    width: "85%",
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

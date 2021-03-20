import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871f5",
  },
  buttonSecondary: {
    backgroundColor: "#04d361",
  },
  buttonText: {
    fontFamily: "Archivo_400Regular",
    color: "#fff",
    fontSize: 20,
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
  logout: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    backgroundColor: "#774DD6",
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerProfile: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  profileText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#D4C2FF",
    lineHeight: 22,
  },
});

export { styles };

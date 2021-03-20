import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#E5E5E5",
    // backgroundColor: "#8257e5",
  },
  header: {
    backgroundColor: "#8257e5",
    height: "48%",
    padding: 40,
  },
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 64,
    paddingTop: 69,
    paddingBottom: 46,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    marginTop: 60,
  },
  title: {
    fontFamily: "Archivo_400Regular",
    color: "#6A6180",
    fontSize: 40,
    opacity: 0.16,
    marginBottom: 12,
  },
  text: {
    fontFamily: "Poppins_500Medium",
    color: "#6A6180",
    fontSize: 24,
    marginRight: 70,
    marginBottom: 30,
  },
});

export { styles };

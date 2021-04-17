import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  header: {
    backgroundColor: "#8257E5",
    minHeight: "20%",
  },
  headerContent: {
    marginTop: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: "Archivo_700Bold",
    color: "#FFFFFF",
    fontSize: 24,
    maxWidth: 245,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
    fontSize: 16,
    maxWidth: 245,
    marginBottom: 80,
  },
  content: {
    marginHorizontal: 16,
    marginTop: -40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6F0",
    backgroundColor: "#FFFFFF",
  },
  main: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20,
  },
  profileText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 20,
    color: "#32264D",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6F0",
    paddingBottom: 8,
    marginBottom: 24,
  },
  containerHourButtonExclude: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerHourButtonExcludeText: {
    color: "#E33D3D",
    fontSize: 14,
    fontFamily: "Archivo_600SemiBold",
  },
  containerHourInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerHourButtonText: {
    color: "#8257E5",
    fontSize: 12,
    fontFamily: "Archivo_600SemiBold",
  },
  title: {
    color: "#32264D",
    fontFamily: "Archivo_600SemiBold",
    fontSize: 20,
    lineHeight: 30,
  },
  footer: {
    padding: 24,
    backgroundColor: "#FAFAFC",
    borderTopWidth: 1,
    borderTopColor: "#E6E6F0",
  },
  footerContainerImg: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  footerContainerText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    marginLeft: 20,
  },
  footerImportant: {
    color: "#8257E5",
  },
  footerText: {
    color: "#A0A0B3",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#DF0000",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export { styles };

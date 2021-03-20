import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import giveClassesBgImg from "../../assets/images/give-classes-background.png";

interface OkPageProps {
  button: {
    source: string;
    text: string;
  };
  content: {
    text: string;
    title: string;
  };
}

const OkPage: React.FC<OkPageProps> = ({ button, content }) => {
  const { navigate } = useNavigation();

  function handleNavigateBack() {
    navigate(button.source);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.content}
      >
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.description}>{content.text}</Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>{button.text}</Text>
      </RectButton>
    </View>
  );
};

export default OkPage;

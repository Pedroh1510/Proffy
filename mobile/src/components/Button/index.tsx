import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { styles } from "./styles";

// import { Container } from './styles';

interface ButtonProps extends RectButtonProperties {
  text: string;
  source: string;
}

const Button: React.FC<ButtonProps> = ({ text, source, ...rest }) => {
  const { navigate } = useNavigation();
  function handleGoTo() {
    navigate(source);
  }
  return (
    <RectButton {...rest} style={styles.button} onPress={() => handleGoTo()}>
      <Text style={styles.buttonText}>{text}</Text>
    </RectButton>
  );
};

export default Button;

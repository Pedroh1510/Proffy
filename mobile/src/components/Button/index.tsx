import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { styles } from "./styles";

interface ButtonProps extends RectButtonProperties {
  text: string;
  isEnabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, isEnabled, ...rest }) => {
  return (
    <RectButton
      style={isEnabled ? styles.button : styles.buttonDisable}
      enabled={isEnabled}
      {...rest}
    >
      <Text style={isEnabled ? styles.buttonText : styles.buttonTextDisable}>
        {text}
      </Text>
    </RectButton>
  );
};

export default Button;

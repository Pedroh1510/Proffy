import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { maskPhone, maskCurrency } from "../../utils/masks";

import { styles } from "./styles";

interface InputProps extends TextInputProps {
  title: string;
  multiline?: boolean;
  mask?: "currency" | "phone";
  inputChange?: any;
}

const Input: React.FC<InputProps> = ({
  title,
  multiline,
  inputChange,
  mask,
  ...rest
}) => {
  function handleGetInput(value: string) {
    switch (mask) {
      case "currency":
        inputChange(maskCurrency(value));
        break;
      case "phone":
        inputChange(maskPhone(value));
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={4}
        style={multiline ? styles.textArea : styles.input}
        onChangeText={(text) => handleGetInput(text)}
        {...rest}
      />
    </View>
  );
};

export default Input;

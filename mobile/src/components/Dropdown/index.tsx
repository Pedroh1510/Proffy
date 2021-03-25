import React from "react";
import { View, Text } from "react-native";
import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";

import { styles } from "./styles";

export interface DropDownObj {
  label: string;
  value: number;
  selected?: boolean;
}

interface DropDownProps extends DropDownPickerProps {
  items: DropDownObj[];
  title?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropDownProps> = ({
  items,
  title,
  placeholder,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.text}>{title}</Text>}

      <DropDownPicker
        placeholder={placeholder ? placeholder : "Selecione"}
        items={items}
        style={styles.input}
        itemStyle={styles.dropdownItem}
        {...rest}
      />
    </View>
  );
};

export default Dropdown;

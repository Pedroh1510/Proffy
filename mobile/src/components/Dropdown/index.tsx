import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";

import { styles } from "./styles";

interface DropDownObj {
  label: string;
  value: number;
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
  const [selectedItem, setSelectedItem] = useState("Selecione");
  return (
    <View style={styles.container}>
      {title && <Text style={styles.text}>{title}</Text>}

      <DropDownPicker
        placeholder={placeholder ? placeholder : "Selecione"}
        items={items}
        style={styles.input}
        itemStyle={styles.dropdownItem}
        onChangeItem={(item) => setSelectedItem(item.value)}
        {...rest}
      />
    </View>
  );
};

export default Dropdown;

import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

import arrowIcon from "../../assets/images/icons/arrow.png";
import { AntDesign } from "@expo/vector-icons";

interface WeekDayProps {
  day: string;
  hour: string;
  opacity?: boolean;
  key?: string;
}

const WeekDay: React.FC<WeekDayProps> = ({ day, hour, opacity, key }) => {
  return (
    <View
      key={key}
      style={[styles.subTimeContainer, opacity ? { opacity: 0.3 } : null]}
    >
      <Text style={styles.timeContainerText}>{day}</Text>
      <Image source={arrowIcon} />
      <Text style={styles.timeContainerText}>{hour}</Text>
    </View>
  );
};

export default WeekDay;

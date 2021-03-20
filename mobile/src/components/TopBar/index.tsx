import React from "react";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate("Landing");
  }
  return (
    <View style={styles.topBar}>
      <BorderlessButton onPress={handleGoBack}>
        <Image source={backIcon} resizeMode="contain" />
      </BorderlessButton>

      <Text style={styles.headerText}>{title}</Text>

      <Image source={logoImg} resizeMode="contain" />
    </View>
  );
};

export default TopBar;

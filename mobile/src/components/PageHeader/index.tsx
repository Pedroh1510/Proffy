import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from "./styles";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  header: string;
  title: string;
  subTitle?: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subTitle,
  header,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate("Landing");
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Text style={styles.headerText}>{header}</Text>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
          {headerRight}
        </View>
        {children}
      </View>
    </View>
  );
};

export default PageHeader;

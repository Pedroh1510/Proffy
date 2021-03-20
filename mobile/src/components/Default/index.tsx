import React, { ReactNode } from "react";
import { ImageBackground, View } from "react-native";

import { styles } from "./styles";

import onboardingImg from "../../assets/images/onboarding.png";

interface DefaultProps {
  image: ReactNode;
}

const Default: React.FC<DefaultProps> = ({ image, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={onboardingImg}
          resizeMode="contain"
          style={styles.contentImage}
        >
          {image}
        </ImageBackground>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Default;

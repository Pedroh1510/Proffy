import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import profileImg from "../../assets/profile.png";

import { api } from "../../services/api";

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useFocusEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  });

  function handleNavigationToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigationToStudyPages() {
    navigate("Study");
  }

  function handleNavigationToProfile() {
    navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton
          style={styles.containerProfile}
          onPress={() => {
            handleNavigationToProfile();
          }}
        >
          <Image
            style={styles.profileImg}
            source={profileImg}
            resizeMode="contain"
          />
          <Text style={styles.profileText}>Pedro Henrique</Text>
        </RectButton>

        <RectButton style={styles.logout}>
          <AntDesign name="poweroff" size={24} color="white" />
        </RectButton>
      </View>

      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigationToStudyPages}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigationToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aula</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        total de {totalConnections} conexões já realizadas {"  "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;

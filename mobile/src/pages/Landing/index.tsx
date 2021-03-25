import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import axios from "axios";

import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import profileImg from "../../assets/profile.png";

import { api } from "../../services/api";
import { eraseLogin, getData } from "../../services/storage";
import { ProfileProps } from "../Profile";
import { logout } from "../../utils/functions";

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);
  const [profile, setProfile] = useState<ProfileProps>();

  useFocusEffect(() => {
    getData().then((data) => {
      setProfile(data);
    });
    axios
      .get("https://run.mocky.io/v3/7fedf0a0-21b4-4170-92b4-603722807d0e")
      .then((response) => {
        const { total } = response.data;
        setTotalConnections(total);
      });
    // api.get("connections").then((response) => {
    //   const { total } = response.data;
    //   setTotalConnections(total);
    // });
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

  async function handleLogout() {
    await eraseLogin();
    navigate("Login");
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
            source={
              profile?.user.avatar !== "a" ? profile?.user.avatar : profileImg
            }
            resizeMode="contain"
          />
          <Text style={styles.profileText}>
            {profile?.user.name && profile?.user.name}
          </Text>
        </RectButton>

        <RectButton
          style={styles.logout}
          onPress={() => {
            handleLogout();
          }}
        >
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

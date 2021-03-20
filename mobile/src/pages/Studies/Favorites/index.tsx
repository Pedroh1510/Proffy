import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import TeacherItem, { Teacher } from "../../../components/TeacherItem";

import styles from "./styles";
import TopBar from "../../../components/TopBar";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <TopBar title="Favoritos" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 14,
        }}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerContentVisible}>
              <Text style={styles.headerTitle}>Meus Proffys favoritos</Text>
            </View>
          </View>
        </View>
        <View style={styles.teacherList}>
          {favorites.map((teacher: Teacher) => (
            <TeacherItem key={teacher.user.id} teacher={teacher} favorited />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorites;

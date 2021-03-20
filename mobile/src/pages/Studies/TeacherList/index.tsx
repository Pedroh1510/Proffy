import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import TeacherItem, { Teacher } from "../../../components/TeacherItem";
import { api } from "../../../services/api";

import styles from "./styles";
import TopBar from "../../../components/TopBar";
import Dropdown from "../../../components/Dropdown";
import { SUBJECTS } from "../../../utils/constants";

const example: Teacher = {
  user: {
    avatar: "aaa",
    bio: "aaaa",
    id: "1",
    name: "Pedro",
    whatsapp: "1111111",
  },
  cost: 2,
  subject: "Math",
  classes: [
    {
      weekDay: "2",
      from: "8",
      to: "9",
    },
    {
      weekDay: "1",
      from: "9",
      to: "10",
    },
  ],
};

const example2: Teacher = {
  user: {
    avatar: "aaa",
    bio: "aaaa",
    id: "2",
    name: "Pedro",
    whatsapp: "1111111",
  },
  cost: 2,
  subject: "Math",
  classes: [
    {
      weekDay: "2",
      from: "8",
      to: "9",
    },
    {
      weekDay: "1",
      from: "9",
      to: "10",
    },
  ],
};

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([example, example2]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.user.id;
          }
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleSubmitFilter() {
    loadFavorites();
    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
    setIsFiltersVisible(false);
  }

  return (
    <View style={styles.container}>
      <TopBar title="Estudar" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 14,
        }}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerContentVisible}>
              <Text style={styles.headerTitle}>Proffys disponíveis</Text>
              <BorderlessButton
                onPress={handleToggleFiltersVisible}
                style={styles.buttonSearch}
              >
                <Feather name="filter" size={25} color="#fff" />
              </BorderlessButton>
            </View>

            {isFiltersVisible && (
              <View style={styles.searchForm}>
                <Text style={styles.label}>Materia</Text>

                <Dropdown
                  items={SUBJECTS}
                  onChangeItem={(text) => setSubject(text.value)}
                  style={styles.input}
                  placeholder="Qual a materia?"
                  placeholderStyle={{ color: "#c1bccc" }}
                />

                <View style={styles.inputGroup}>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da Semana</Text>
                    <Dropdown
                      items={SUBJECTS}
                      onChangeItem={(text) => setWeekDay(text.value)}
                      style={styles.input}
                      placeholder="Qual a dia?"
                      placeholderStyle={{ color: "#c1bccc" }}
                    />
                  </View>
                  <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                    <Dropdown
                      items={SUBJECTS}
                      onChangeItem={(text) => setTime(text.value)}
                      style={styles.input}
                      placeholder="Qual horário?"
                      placeholderStyle={{ color: "#c1bccc" }}
                    />
                  </View>
                </View>

                <RectButton
                  style={styles.submitButton}
                  onPress={handleSubmitFilter}
                >
                  <Text style={styles.submitButtonText}>Filtra</Text>
                </RectButton>
              </View>
            )}
          </View>
        </View>
        <View style={styles.teacherList}>
          {teachers.map((teacher: Teacher) => (
            <TeacherItem
              key={teacher.user.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.user.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TeacherList;

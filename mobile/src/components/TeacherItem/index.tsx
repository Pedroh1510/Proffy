import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { Image, Linking, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import profileImg from "../../assets/profile.png";
import { api } from "../../services/api";
import WeekDay from "../WeekDay";
import styles from "./styles";

export interface Teacher {
  user: UserPros;
  proffy: ProffyProps;
}

export interface UserPros {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface ProffyProps {
  subject: string;
  cost: number;
  schedules: ClassesProps[];
}

export interface ClassesProps {
  week_day: number;
  from: number;
  to: number;
}

export interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.user.id === teacher.user.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  async function handleLinkToWhatsapp() {
    await api.post("connections", { user_id: teacher.user.id });
    Linking.openURL(`whatsapp://send?phone=${teacher.user.whatsapp}`);
  }

  function getDay(day: number) {
    switch (day) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sábado";
      default:
        return "???";
    }
  }

  function getClasses() {
    const classes: ClassesProps[] = teacher.proffy.schedules;
    const a = [];

    for (let index = 1; index < 6; index++) {
      const q = classes.filter((item) => {
        if (item.week_day === index) return item;
        return null;
      });

      const day = getDay(index);

      if (q.length) {
        const { to, from } = q[0];

        a.push(<WeekDay day={day} key={day} hour={`${from}h - ${to}h`} />);
      } else {
        a.push(<WeekDay day={day} key={day} hour={` - `} opacity />);
      }
    }

    return a;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={profileImg} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.user.name}</Text>
          <Text style={styles.subject}>{teacher.proffy.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.user.bio}</Text>

      <View style={styles.timeContainer}>
        <View style={styles.timeTitleContainer}>
          <Text style={styles.timeTitleContainerText}>Dia</Text>
          <Text style={styles.timeTitleContainerText}>Horário</Text>
        </View>
        {getClasses()}
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ {teacher.proffy.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
            onPress={handleToggleFavorite}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;

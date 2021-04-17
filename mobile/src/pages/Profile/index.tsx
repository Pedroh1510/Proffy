import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import profileImg from "../../assets/profile.png";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import { ClassesProps, ProffyProps } from "../../components/TeacherItem";
import TopBar from "../../components/TopBar";
import { api } from "../../services/api";
import { eraseLogin, getData } from "../../services/storage";
import { HOUR, MAX_LENGTH, SUBJECTS, WEEK_DAY } from "../../utils/constants";
import { getDropdownInicialValue } from "../../utils/functions";
import { styles } from "./styles";

const initialTime: ClassesProps = {
  to: 0,
  from: 0,
  week_day: 0,
};

export interface UserProps {
  id: string;
  avatar: string;
  bio: string;
  name: string;
  whatsapp: string;
  isProffy: boolean;
}

export interface ProfileProps {
  user: UserProps;
  proffy?: ProffyProps;
}

interface RequestProps {
  userId: string;
  avatar: string;
  bio: string;
  name: string;
  whatsapp: string;
  isProffy: boolean;
  schedule?: ClassesProps[];
  cost?: number;
  subject?: string;
}

const Profile: React.FC = () => {
  const { navigate } = useNavigation();
  const [time, setTime] = useState<ClassesProps[]>([initialTime]);
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState<number>();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isProffy, setIsProffy] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [subject, setSubject] = useState("");
  const [form, setForm] = useState<RequestProps>();

  useEffect(() => {
    getData().then((data) => {
      const { user, proffy } = data as ProfileProps;

      if (user.isProffy === false) {
        setUser(user, false);
      } else {
        setUser(user, true, proffy);
      }
    });
  }, []);

  useEffect(() => {
    if (!isProffy) {
      setForm({
        userId,
        name,
        avatar,
        whatsapp: phone,
        bio,
        isProffy,
      });
    } else {
      setForm({
        userId,
        name,
        avatar,
        whatsapp: phone,
        bio,
        isProffy,
        cost,
        subject,
        schedule: time,
      });
    }
  }, [userId, name, avatar, phone, bio, isProffy, cost, subject, time]);

  useEffect(() => {
    setName(firstName + " " + lastName);
  }, [firstName, lastName]);

  function setUser(user: UserProps, isTeacher: boolean, proffy?: ProffyProps) {
    const first = user.name.split(" ")[0];
    const last = user.name
      .split(" ")
      .filter((element, index) => (index !== 0 ? element : null))
      .join(" ");

    setFirstName(first);
    setLastName(last);

    setName(user.name);
    setBio(user.bio);
    setPhone(user.whatsapp);
    setName(user.name);
    setAvatar(user.avatar);
    setIsProffy(isTeacher);
    setUserId(user.id);
    if (isTeacher && proffy) {
      setTime(proffy.schedules);
      setCost(proffy.cost);
      setSubject(proffy.subject);
    }
  }

  function handleAddNewTime() {
    setTime([...time, { week_day: 1, from: 8, to: 8 }]);
  }

  function handleRemoveTime(itemIndex: number) {
    let a = [];
    for (let index = 0; index < time.length; index++) {
      if (index !== itemIndex) {
        a.push(time[index]);
      }
    }
    setTime(a);
  }

  async function handleSave() {
    console.log(form);

    api
      .put("classes", form)
      .then(async (response) => {
        if (response.status === 202) {
          await eraseLogin();
          navigate("Login");
        }
      })
      .catch((err) => {});
  }

  async function handleRemove() {
    await api.delete("delete", { data: { userId } });
    await eraseLogin();
    navigate("Login");
  }

  return (
    <View style={styles.container}>
      <TopBar title="Meu perfil" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 24,
        }}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <RectButton style={styles.headerImage}>
              <Image source={profileImg} style={styles.headerImage} />
            </RectButton>
            <Text style={styles.headerTitle}>{name}</Text>
            <Text style={styles.headerSubtitle}>{subject}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Seus dados</Text>
            </View>

            <Input
              title="Nome"
              value={firstName}
              onChangeText={(value) => setFirstName(value)}
            />
            <Input
              title="Sobrenome"
              value={lastName}
              onChangeText={(value) => setLastName(value)}
            />

            <Input
              title="Whatsapp"
              // placeholder="(xx)xxxxx-xxxx"
              inputChange={(text: string) => setPhone(text)}
              value={phone}
              maxLength={14}
              mask="phone"
              keyboardType="phone-pad"
            />
            <Input
              multiline
              maxLength={MAX_LENGTH}
              title="Bio"
              value={bio}
              onChangeText={(text) => setBio(text)}
            />

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Sobre a aula</Text>
            </View>
            <Dropdown
              items={SUBJECTS}
              title="Materia"
              disabled={!isProffy}
              defaultValue={getDropdownInicialValue(subject, SUBJECTS)}
            />
            <Input
              title="Custo por hora"
              // placeholder="R$ xx,xx"
              mask="currency"
              inputChange={(text: number) => setCost(text)}
              keyboardType="phone-pad"
              value={cost?.toString()}
              editable={isProffy}
            />

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Horários disponíveis</Text>
              <RectButton onPress={() => handleAddNewTime()} enabled={isProffy}>
                <Text style={styles.containerHourButtonText}>+ Novo</Text>
              </RectButton>
            </View>
            {time.map((classes, index) => {
              return (
                <View key={index}>
                  {index > 0 ? (
                    <RectButton
                      style={styles.containerHourButtonExclude}
                      onPress={() => {
                        handleRemoveTime(index);
                      }}
                      enabled={isProffy}
                    >
                      <Text style={styles.containerHourButtonExcludeText}>
                        Excluir Aula
                      </Text>
                    </RectButton>
                  ) : null}

                  <Dropdown
                    items={WEEK_DAY}
                    title="Dia da Semana"
                    disabled={!isProffy}
                    defaultValue={getDropdownInicialValue(
                      classes.week_day,
                      WEEK_DAY
                    )}
                  />
                  <View style={styles.containerHourInput}>
                    <Dropdown
                      items={HOUR}
                      title="Das"
                      disabled={!isProffy}
                      defaultValue={getDropdownInicialValue(classes.from, HOUR)}
                    />
                    <Dropdown
                      items={HOUR}
                      title="Até"
                      disabled={!isProffy}
                      defaultValue={getDropdownInicialValue(classes.to, HOUR)}
                    />
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.footer}>
            <Button
              text="Salvar cadastro"
              isEnabled
              onPress={() => handleSave()}
            />
            <RectButton
              style={styles.button}
              enabled
              onPress={() => handleRemove()}
            >
              <Text style={styles.buttonText}>Remover Conta</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

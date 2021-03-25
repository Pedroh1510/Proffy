import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import profileImg from "../../assets/profile.png";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import { ProffyProps } from "../../components/TeacherItem";
import TopBar from "../../components/TopBar";
import { eraseLogin, getData } from "../../services/storage";
import { HOUR, MAX_LENGTH, SUBJECTS, WEEK_DAY } from "../../utils/constants";
import { getDropdownInicialValue } from "../../utils/functions";
import { styles } from "./styles";

interface TimeProps {
  weekDay: string;
  from: string;
  to: string;
}
const initialTime: TimeProps = {
  to: "",
  from: "",
  weekDay: "0",
};

export interface UserProps {
  avatar: string;
  bio: string;
  name: string;
  whatsapp: string;
  isProffy: string;
}

export interface ProfileProps {
  user: UserProps;
  proffy?: ProffyProps;
}

const Profile: React.FC = () => {
  const { navigate } = useNavigation();
  const [time, setTime] = useState<TimeProps[]>([initialTime]);
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [isProffy, setIsProffy] = useState(false);
  const [proffy, setProffy] = useState<ProffyProps>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    getData().then((data) => {
      const { user, proffy } = data as ProfileProps;

      if (user.isProffy === "false") {
        setUser(user, false);
      } else {
        setUser(user, true);
        setProffy(proffy);
        if (proffy?.classes) setTime(proffy.classes);
      }
    });
  }, []);

  useEffect(() => {
    //é
    //"https://run.mocky.io/v3/7f0aea0e-3aac-4df1-b184-dee35923a5dd"
    //não é
    //"https://run.mocky.io/v3/3b5296e5-fad6-40b8-a148-4b1c3cd0f2ad"
    axios
      // .get("https://run.mocky.io/v3/3b5296e5-fad6-40b8-a148-4b1c3cd0f2ad")
      .get("https://run.mocky.io/v3/7f0aea0e-3aac-4df1-b184-dee35923a5dd")
      .then((response) => {
        const { user, proffy } = response.data as ProfileProps;

        // if (user.isProffy === "false") {
        //   setUser(user, false);
        // } else {
        //   setUser(user, true);
        //   setProffy(proffy);
        //   if (proffy?.classes) setTime(proffy.classes);
        // }
      })
      .catch((err) => {
        console.log("Erro");
      });
  }, []);

  function setUser(user: UserProps, isTeacher: boolean) {
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
    setIsProffy(isTeacher);
  }

  function handleAddNewTime() {
    setTime([...time, { weekDay: "1", from: "", to: "" }]);
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
            <Text style={styles.headerSubtitle}>{proffy?.subject}</Text>
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
              defaultValue={getDropdownInicialValue(proffy?.subject, SUBJECTS)}
            />
            <Input
              title="Custo por hora"
              // placeholder="R$ xx,xx"
              mask="currency"
              inputChange={(text: string) => setCost(text)}
              keyboardType="phone-pad"
              value={cost}
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
                      parseInt(classes.weekDay),
                      WEEK_DAY
                    )}
                  />
                  <View style={styles.containerHourInput}>
                    <Dropdown
                      items={HOUR}
                      title="Das"
                      disabled={!isProffy}
                      defaultValue={getDropdownInicialValue(
                        parseInt(classes.from),
                        HOUR
                      )}
                    />
                    <Dropdown
                      items={HOUR}
                      title="Até"
                      disabled={!isProffy}
                      defaultValue={getDropdownInicialValue(
                        parseInt(classes.to),
                        HOUR
                      )}
                    />
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.footer}>
            <Button
              text="Salvar cadastro"
              isEnabled={isProffy}
              onPress={() => handleSave()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

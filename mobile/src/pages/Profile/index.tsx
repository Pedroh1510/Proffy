import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import Input from "../../components/Input";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import Dropdown from "../../components/Dropdown";

import profileImg from "../../assets/profile.png";

import { styles } from "./styles";
import { HOUR, MAX_LENGTH, SUBJECTS, WEEK_DAY } from "../../utils/constants";

interface TimeProps {
  dayWeek: string;
  from: string;
  to: string;
}
const initialTime = {
  to: "",
  from: "",
  dayWeek: "0",
};

const Profile: React.FC = () => {
  const [time, setTime] = useState<TimeProps[]>([initialTime]);
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState("");

  function handleAddNewTime() {
    setTime([...time, { dayWeek: "1", from: "", to: "" }]);
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
            <Text style={styles.headerTitle}>Pedro Henrique</Text>
            <Text style={styles.headerSubtitle}>Fisica</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Seus dados</Text>
            </View>

            <Input title="Nome" />
            <Input title="Sobrenome" />

            <Input
              title="Whatsapp"
              // placeholder="(xx)xxxxx-xxxx"
              inputChange={(text: string) => setPhone(text)}
              value={phone}
              maxLength={14}
              mask="phone"
              keyboardType="phone-pad"
            />
            <Input multiline maxLength={MAX_LENGTH} title="Bio" />

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Sobre a aula</Text>
            </View>
            <Dropdown items={SUBJECTS} title="Materia" />
            <Input
              title="Custo por hora"
              // placeholder="R$ xx,xx"
              mask="currency"
              inputChange={(text: string) => setCost(text)}
              keyboardType="phone-pad"
              value={cost}
            />

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Horários disponíveis</Text>
              <RectButton onPress={() => handleAddNewTime()}>
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
                    >
                      <Text style={styles.containerHourButtonExcludeText}>
                        Excluir Aula
                      </Text>
                    </RectButton>
                  ) : null}

                  <Dropdown items={WEEK_DAY} title="Dia da Semana" />
                  <View style={styles.containerHourInput}>
                    <Dropdown items={HOUR} title="Das" />
                    <Dropdown items={HOUR} title="Até" />
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.footer}>
            <Button text="Salvar cadastro" source="OkGiveClasses" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

import Input from "../../../components/Input";
import profileImg from "../../../assets/profile.png";
import Button from "../../../components/Button";
import TopBar from "../../../components/TopBar";
import Dropdown from "../../../components/Dropdown";

import { HOUR, MAX_LENGTH, SUBJECTS, WEEK_DAY } from "../../../utils/constants";

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

const RegisterGiveClasses: React.FC = () => {
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
      <TopBar title="Dar Aula" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 24,
        }}
      >
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>
              Que incrível que você quer dar aulas.
            </Text>
            <Text style={styles.headerSubtitle}>
              O primeiro passo, é preencher esse formulário de inscrição.
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Seus dados</Text>
            </View>
            <View style={styles.profile}>
              <Image
                source={profileImg}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.profileText}>Pedro Henrique</Text>
            </View>
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
              <RectButton
                onPress={() => {
                  handleAddNewTime();
                }}
              >
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
            <View style={styles.footerContainerImg}>
              <AntDesign name="warning" size={24} color="#8257E5" />

              <View style={styles.footerContainerText}>
                <Text style={styles.footerImportant}>Importante!</Text>
                <Text style={styles.footerText}>Preencha todos os dados</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterGiveClasses;

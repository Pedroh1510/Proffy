import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import profileImg from "../../../assets/profile.png";
import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import { ProffyProps } from "../../../components/TeacherItem";
import TopBar from "../../../components/TopBar";
import { getData } from "../../../services/storage";
import { HOUR, MAX_LENGTH, SUBJECTS, WEEK_DAY } from "../../../utils/constants";
import { ProfileProps, UserProps } from "../../Profile";
import { styles } from "./styles";

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
  const { navigate } = useNavigation();
  const [time, setTime] = useState<TimeProps[]>([initialTime]);
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [subject, setSubject] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: "", from: "", to: "" },
  ]);
  const [proffy, setProffy] = useState<ProffyProps>();
  const [isProffy, setIsProffy] = useState(false);

  useEffect(() => {
    getData().then((data) => {
      const { user, proffy } = data as ProfileProps;

      if (user.isProffy === false) {
        setUser(user, false);
      } else {
        setUser(user, true);
        setProffy(proffy);
        setIsProffy(true);
      }
    });
  }, []);

  function setUser(user: UserProps, isTeacher: boolean) {
    setAvatar(user.avatar);
    setName(user.name);
    setBio(user.bio);
    setPhone(user.whatsapp);
    setName(user.name);
  }

  function handleAddNewTime() {
    setTime([...time, { dayWeek: "1", from: "", to: "" }]);
    setScheduleItems([...scheduleItems, { week_day: "", from: "", to: "" }]);
  }

  function handleRemoveTime(itemIndex: number) {
    let a = [];
    for (let index = 0; index < scheduleItems.length; index++) {
      if (index !== itemIndex) {
        a.push(scheduleItems[index]);
      }
    }
    setScheduleItems(a);
  }

  function setScheduleItemValue(
    field: string,
    position: number,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updateScheduleItems);
  }

  function handleSave() {
    navigate("OkGiveClasses");
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
              <Text style={styles.profileText}>{name}</Text>
            </View>
            <Input
              title="Whatsapp"
              // placeholder="(xx)xxxxx-xxxx"
              inputChange={(text: string) => setPhone(text)}
              value={phone}
              maxLength={14}
              mask="phone"
              keyboardType="phone-pad"
              editable={!isProffy}
            />
            <Input
              multiline
              maxLength={MAX_LENGTH}
              title="Bio"
              onChangeText={(text) => setBio(text)}
              value={bio}
              editable={!isProffy}
            />

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Sobre a aula</Text>
            </View>
            <Dropdown
              items={SUBJECTS}
              title="Materia"
              onChangeItem={(value) => setSubject(value.label)}
              disabled={isProffy}
            />
            <Input
              title="Custo por hora"
              // placeholder="R$ xx,xx"
              mask="currency"
              inputChange={(text: string) => setCost(text)}
              keyboardType="phone-pad"
              value={cost}
              editable={!isProffy}
            />

            <View style={styles.containerTitle}>
              <Text style={styles.title}>Horários disponíveis</Text>
              <RectButton
                onPress={() => {
                  handleAddNewTime();
                }}
                enabled={!isProffy}
              >
                <Text style={styles.containerHourButtonText}>+ Novo</Text>
              </RectButton>
            </View>

            {scheduleItems.map((classes, index) => {
              return (
                <View key={index}>
                  {index > 0 ? (
                    <RectButton
                      style={styles.containerHourButtonExclude}
                      onPress={() => {
                        handleRemoveTime(index);
                      }}
                      enabled={!isProffy}
                    >
                      <Text style={styles.containerHourButtonExcludeText}>
                        Excluir Aula
                      </Text>
                    </RectButton>
                  ) : null}

                  <Dropdown
                    items={WEEK_DAY}
                    title="Dia da Semana"
                    onChangeItem={(text) =>
                      setScheduleItemValue("week_day", index, text.value)
                    }
                    disabled={isProffy}
                  />
                  <View style={styles.containerHourInput}>
                    <Dropdown
                      items={HOUR}
                      title="Das"
                      onChangeItem={(text) =>
                        setScheduleItemValue("from", index, text.value)
                      }
                      disabled={isProffy}
                    />
                    <Dropdown
                      items={HOUR}
                      title="Até"
                      onChangeItem={(text) =>
                        setScheduleItemValue("to", index, text.value)
                      }
                      disabled={isProffy}
                    />
                  </View>
                </View>
              );
            })}
          </View>

          <View style={styles.footer}>
            <Button
              text="Salvar cadastro"
              onPress={() => handleSave()}
              isEnabled={!isProffy}
            />
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

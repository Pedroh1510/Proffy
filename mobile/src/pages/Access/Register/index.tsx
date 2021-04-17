import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";

import backIcon from "../../../assets/images/icons/back.png";
import Button from "../../../components/Button";
import { api } from "../../../services/api";
import { isValidEmail } from "../../../utils/functions";
import { styles } from "./styles";

interface FormDataProps {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { navigate } = useNavigation();
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const [visibleSnackbarEmail, setVisibleSnackbarEmail] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [enableSend, setEnableSend] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>();

  useEffect(() => {
    resetStates();
  }, []);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      email !== ""
    ) {
      setEnableSend(true);
      setFormData({ password, email, name: firstName + " " + lastName });
    } else {
      setEnableSend(false);
    }
  }, [firstName, lastName, password, email]);

  function resetStates() {
    setPassword("");
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  function handleGoBack() {
    resetStates();
    navigate("Login");
  }

  function handleLogin() {
    if (isValidEmail(email)) {
      api
        .post("register", formData)
        .then((response) => {
          if (response.status === 201) {
            resetStates();
            navigate("OkRegister");
          } else {
            setVisibleSnackbar(true);
          }
        })
        .catch((err) => {
          setVisibleSnackbar(true);
        });
    } else {
      setVisibleSnackbarEmail(true);
    }
  }

  const onDismissSnackBar = () => setVisibleSnackbar(false);
  const onDismissSnackBarEmail = () => setVisibleSnackbarEmail(false);

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: "#E5E5E5",
        flex: 1,
      }}
    >
      <View style={styles.topBar}>
        <BorderlessButton
          style={styles.topBarButton}
          onPress={() => handleGoBack()}
        >
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Crie sua conta gratuíta</Text>
        <Text style={styles.subTitle}>
          Basta preencher esses dados e você estará conosco.
        </Text>

        <View style={styles.register}>
          <TextInput
            style={styles.inputText}
            placeholder="Primeiro Nome"
            onChangeText={(e) => setFirstName(e)}
            value={firstName}
          />
          <TextInput
            style={styles.inputTextMiddle}
            placeholder="Sobrenome"
            onChangeText={(e) => setLastName(e)}
            keyboardType="twitter"
            value={lastName}
          />
          <TextInput
            style={styles.inputTextMiddle}
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
          <View style={styles.containerPass}>
            <TextInput
              style={styles.inputTextPass}
              placeholder="Senha"
              autoCompleteType="password"
              secureTextEntry={!isVisible}
              onChangeText={(e) => setPassword(e)}
              value={password}
            />
            <BorderlessButton onPress={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <Ionicons name="eye-outline" size={24} color="#9C98A6" />
              ) : (
                <Ionicons name="eye-off-outline" size={24} color="#9C98A6" />
              )}
            </BorderlessButton>
          </View>
        </View>
        <Button
          text="Concluir Cadastro"
          isEnabled={enableSend}
          onPress={() => handleLogin()}
        />
        <Snackbar
          visible={visibleSnackbar}
          onDismiss={onDismissSnackBar}
          style={{ backgroundColor: "#DCDCE5" }}
        >
          <Text style={{ color: "#32264D" }}>Falha ao cadastrar</Text>
        </Snackbar>
        <Snackbar
          visible={visibleSnackbarEmail}
          onDismiss={onDismissSnackBarEmail}
          style={{ backgroundColor: "#DCDCE5" }}
        >
          <Text style={{ color: "#32264D" }}>Email invalido</Text>
        </Snackbar>
      </View>
    </View>
  );
};

export default Register;

import { Ionicons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Snackbar } from "react-native-paper";

import loginImg from "../../../assets/images/logo.png";
import Button from "../../../components/Button";
import Default from "../../../components/Default";
import { api } from "../../../services/api";
import { isLogged, saveLogin, storeData } from "../../../services/storage";
import { styles } from "./styles";

const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);

  useEffect(() => {
    setPassword("");
    isLogged().then((data) => {
      if (data) navigate("Landing");
    });
  }, []);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [email, password]);

  function handleLogin() {
    api
      .post("login", { email, password })
      .then(async (response) => {
        if (response.status === 202) {
          await storeData(response.data);
          if (isChecked) await saveLogin(response.data);
          setEmail("");
          setPassword("");
          setIsChecked(false);
          setIsVisible(false);
          resetData();
          navigate("Landing");
        } else {
          setVisibleSnackbar(true);
        }
      })
      .catch(() => {
        setVisibleSnackbar(true);
      });
  }

  function resetData() {
    setEmail("");
    setPassword("");
    setIsChecked(false);
  }

  const onDismissSnackBar = () => setVisibleSnackbar(false);

  return (
    <Default
      image={
        <Image
          resizeMode="contain"
          source={loginImg}
          style={{ width: 160, height: 56 }}
        />
      }
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Fazer login</Text>
          <RectButton
            onPress={() => {
              navigate("Register");
            }}
          >
            <Text style={styles.register}>Criar uma conta</Text>
          </RectButton>
        </View>

        <TextInput
          style={styles.inputText}
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

        <View style={styles.subContainer}>
          <View style={styles.lembrar}>
            <CheckBox
              onChange={() => {
                setIsChecked(!isChecked);
              }}
              value={isChecked}
            />
            <Text>Lembrar-me</Text>
          </View>
          <RectButton>
            <Text>Esqueci minha senha</Text>
          </RectButton>
        </View>

        <Button
          text="Entrar"
          enabled={isOk}
          // enabled={isOk}
          isEnabled={isOk}
          onPress={() => {
            handleLogin();
          }}
        />
        <Snackbar
          visible={visibleSnackbar}
          onDismiss={onDismissSnackBar}
          style={{ backgroundColor: "#DCDCE5" }}
        >
          <Text style={{ color: "#32264D" }}>Falha ao fazer login</Text>
        </Snackbar>
      </View>
    </Default>
  );
};

export default Login;

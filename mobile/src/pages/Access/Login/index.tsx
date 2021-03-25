import CheckBox from "@react-native-community/checkbox";
import React, { useEffect, useState } from "react";
import { TextInput, View, Text, Image } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { Snackbar } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";

import loginImg from "../../../assets/images/logo.png";
import Default from "../../../components/Default";
import Button from "../../../components/Button";

import { styles } from "./styles";
import { isLogged, saveLogin, storeData } from "../../../services/storage";

const Login: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { navigate } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOk, setIsOk] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);

  useEffect(() => {
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
    //tem acesso sem proffy
    //https://run.mocky.io/v3/ebf01d79-ab01-446b-be67-62071c1cae42
    //sem acesso
    //https://run.mocky.io/v3/13f58c57-0e91-4661-8205-8f7f6799bf7c
    axios
      .get("https://run.mocky.io/v3/ebf01d79-ab01-446b-be67-62071c1cae42")
      // .get("https://run.mocky.io/v3/13f58c57-0e91-4661-8205-8f7f6799bf7c")
      .then(async (response) => {
        if (response.status === 202) {
          await storeData(response.data);
          if (isChecked) await saveLogin(response.data);
          navigate("Landing");
        } else {
          setVisibleSnackbar(true);
        }
      })
      .catch(() => {
        setVisibleSnackbar(true);
      });
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
          <RectButton>
            <Text style={styles.register}>Criar uma conta</Text>
          </RectButton>
        </View>

        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e)}
        />
        <View style={styles.containerPass}>
          <TextInput
            style={styles.inputTextPass}
            placeholder="Senha"
            autoCompleteType="password"
            secureTextEntry={!isVisible}
            onChangeText={(e) => setPassword(e)}
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

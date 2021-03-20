import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { TextInput, View, Text, Image } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import loginImg from "../../../assets/images/logo.png";
import Default from "../../../components/Default";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";

const Login: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { navigate } = useNavigation();

  function handleLogin() {
    navigate("Landing");
  }

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

        <TextInput style={styles.inputText} placeholder="E-mail" />
        <View style={styles.containerPass}>
          <TextInput style={styles.inputTextPass} placeholder="Senha" />
          <BorderlessButton>
            <Ionicons name="eye-outline" size={24} color="#9C98A6" />
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

        <RectButton
          style={styles.button}
          onPress={() => {
            handleLogin();
          }}
        >
          <Text>Entrar</Text>
        </RectButton>
      </View>
    </Default>
  );
};

export default Login;

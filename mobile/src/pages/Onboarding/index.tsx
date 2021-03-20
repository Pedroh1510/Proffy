import React, { useState } from "react";
import { View, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

import Default from "../../components/Default";
import arrowIcon from "../../assets/images/icons/arrow.png";
import pagesIcon from "../../assets/images/icons/pages.png";

interface ContentPageProps {
  title: string;
  text: string;
}

const Onboarding: React.FC = () => {
  const { navigate } = useNavigation();
  const [page, setPage] = useState(false);

  const changeHeaderIcon = () => {
    if (page) {
      return <Ionicons name="easel-outline" size={120} color="white" />;
    }
    return <Feather name="book-open" size={120} color="white" />;
  };

  const changeTextContent = (): ContentPageProps => {
    if (page) {
      return {
        title: "02.",
        text: "Ou dê aulas sobre o que você mais conhece",
      };
    }
    return {
      title: "01.",
      text: "Encontre vários professores para ensinar você",
    };
  };

  const handleNextPage = () => {
    if (!page) {
      setPage(true);
    } else {
      navigate("Landing");
    }
  };

  return (
    <Default image={changeHeaderIcon()}>
      <View style={styles.containerFooter}>
        <Image
          source={pagesIcon}
          style={
            (styles.pageIcon,
            { transform: [{ rotate: `${page ? 0 : 180}deg` }] })
          }
        />
        <RectButton
          style={styles.button}
          onPress={(e) => {
            handleNextPage();
          }}
        >
          <Image source={arrowIcon} />
        </RectButton>
      </View>
    </Default>
  );
};

export default Onboarding;

import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // Adjust path

import RegularButton from "../Buttons/RegularButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../SendMoneyProps/portraits/colors";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1.5;
`;

const ButtonSection: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ButtonSectionBackground>
      <RegularButton btnStyles={{ width: "50%" }} onPress={() => navigation.navigate("Home")}>
        Cancel <Ionicons name="close" size={17} color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;

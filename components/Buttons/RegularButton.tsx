import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
// components
import { colors } from "../SendMoneyProps/portraits/colors"; // Correction du chemin d'importation
import RegularText from "../Texts/RegularText"; // Correction du nom du fichier importé

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.secondary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

// Définition correcte de l'interface des props
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = ({ btnStyles, onPress, textStyles, children }) => {
  return (
    <ButtonView onPress={onPress} style={btnStyles}>
      <RegularText textStyles={textStyles}>{children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;

// TransactionAvi.tsx
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../SendMoneyProps/portraits/colors";
import { Ionicons } from "@expo/vector-icons";

// ✅ Correct prop type just for TransactionAvi
interface TransactionAviProps {
  background: string;
  icon: keyof typeof Ionicons.glyphMap; // type-safe icon name
}

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const TransactionAvi: FunctionComponent<TransactionAviProps> = ({ background, icon }) => {
  return (
    <StyledView style={{ backgroundColor: background }}>
      <Ionicons name={icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;

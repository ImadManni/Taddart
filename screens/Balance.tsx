import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// Custom components
import { colors } from "../components/SendMoneyProps/portraits/colors";
import { Container } from "../components/SendMoneyProps/portraits/shared";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";

// Types
import { RootStackParamList } from "../components/rootstack";
import { StackScreenProps } from "@react-navigation/stack";

// Styled components
const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const InformationSection = styled.View`
  background-color: ${colors.white};
  padding: 15px;
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InformationText = styled.Text`
  font-size: 14px;
  color: ${colors.secondary};
  text-align: center;
  margin-top: 10px;
`;

const CancelButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 15px;
  margin: 20px 0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const CancelButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />

      {/* Amount Section */}
      <AmountSection balance={route?.params?.balance} />

      {/* Balance Card Section */}
      <BalanceCardSection {...route?.params} />

      {/* Information Section */}
      <InformationSection>
        <InformationText position="center" style={{ fontWeight: "bold" }}>
          Your total balance is displayed above. You can view detailed
          transactions, manage your account, or contact support for any
          assistance.
        </InformationText>
      </InformationSection>


      {/* Button Section */}
      <ButtonSection />
    </BalanceContainer>
  );
};

export default Balance;

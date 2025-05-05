// Home.tsx
import React, { FunctionComponent, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { TouchableOpacity, Text, TextInput, Keyboard, Image } from "react-native";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import { LineChart } from "../screens/LineChart";
import { colors } from "../components/SendMoneyProps/portraits/colors";
import { Container } from "../components/SendMoneyProps/portraits/shared";
import logo1 from "../assets/mc.png";
import logo2 from "../assets/visa_white.png";
import { RootStackParamList } from "../components/rootstack";
import { StackScreenProps } from "@react-navigation/stack";
import animatedCard1 from "../assets/animatedcard1.gif";
import { askGemini } from "../screens/chatbot"; // Correct import

export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
  position: relative;
`;

const FooterButton = styled(TouchableOpacity)`
  background-color: ${colors.primary};
  padding: 15px;
  margin: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const FooterButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

const MessageContainer = styled.View`
  background-color: ${colors.white};
  padding: 15px;
  margin-top: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 90%;
  align-self: center;
  position: relative;
`;

const MessageText = styled(Text)`
  font-size: 14px;
  color: ${colors.secondary};
  margin-bottom: 10px;
`;

const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${colors.primary};
  padding: 5px;
  border-radius: 15px;
`;

const CloseButtonText = styled(Text)`
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled(TextInput)`
  border-width: 1px;
  border-color: ${colors.secondary};
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  color: ${colors.secondary};
  margin-top: 10px;
  height: 40px;
  width: 100%;
`;

const AnswerScroll = styled.ScrollView`
  max-height: 200px; /* Limit height for scrolling */
  margin-top: 10px;
  border-width: 1px;
  border-color: ${colors.secondary};
  border-radius: 8px;
  padding: 10px;
  background-color: ${colors.graylight};
`;

const AnswerText = styled(Text)`
  font-size: 14px;
  color: ${colors.secondary};
`;

const Home: FunctionComponent = ({ navigation }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const cardsData = [
    { id: 1, accountNo: "3845757744", balance: 20000.15, alias: "Work Debit", logo: logo2 },
    { id: 2, accountNo: "3845730203", balance: 12000.01, alias: "Personal Prepaid", logo: logo1 },
    { id: 3, accountNo: "3845238847", balance: 5600.83, alias: "School Prepaid", logo: logo2 },
  ];

  const transactionData = [
    { id: 1, amount: "-$86.00", date: "14 Sep 2021", title: "Taxi", subtitle: "inDrive", art: { background: colors.primary, icon: "car" }},
    { id: 2, amount: "-$286.00", date: "14 Sep 2021", title: "Shopping", subtitle: "Ali express", art: { background: colors.tertiary, icon: "cart" }},
  ];

  const openMessage = () => {
    setShowMessage(true);
  };

  const closeMessage = () => {
    setShowMessage(false);
    setQuestion("");
    setAnswer("");
  };

  const handleAskGemini = async () => {
    if (question.trim() === "") return;
    Keyboard.dismiss();
    setAnswer("Loading...");
    try {
      const response = await askGemini(question);
      setAnswer(response);
    } catch (error) {
      console.error("Error fetching Gemini AI response:", error);
      setAnswer("Failed to get a response from Gemini AI.");
    }
  };

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <LineChart />
      <Image source={animatedCard1} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, resizeMode: "cover" }} />

      {showMessage ? (
        <MessageContainer>
          <CloseButton onPress={closeMessage}>
            <CloseButtonText>x</CloseButtonText>
          </CloseButton>

          <MessageText>Gemini AI is here to assist you!</MessageText>
          <MessageText>Ask your question below:</MessageText>

          <Input
            placeholder="Type your question..."
            value={question}
            onChangeText={setQuestion}
          />

          <FooterButton onPress={handleAskGemini}>
            <FooterButtonText>Ask Gemini AI</FooterButtonText>
          </FooterButton>

          {answer !== "" && (
            <AnswerScroll showsVerticalScrollIndicator={false}>
              <AnswerText>{answer}</AnswerText>
            </AnswerScroll>
          )}
        </MessageContainer>
      ) : (
        <FooterButton onPress={openMessage}>
          <FooterButtonText>Ask Gemini AI</FooterButtonText>
        </FooterButton>
      )}
    </HomeContainer>
  );
};

export default Home;

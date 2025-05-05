import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import RegularButton from "../components/Buttons/RegularButton";

// Custom components
import { colors } from "../components/SendMoneyProps/portraits/colors";
import { Container } from "../components/SendMoneyProps/portraits/shared";

import { Image } from "expo-image"; // Import expo-image

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const LogoContainer = styled.View`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50px, -50px);
  z-index: 10;
`;

const LogoImage = styled.Image`
  width: 100px;
  height: 100px;
  resize-mode: contain;
`;

import background from "../assets/background_v1.png";
import logo from "../assets/taddart.png";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import { View } from "react-native";

import animatedHand from "../assets/animatedhand.gif"; // Path to your new GIF

//types
import { RootStackParamList } from "../components/rootstack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>

        {/* Displaying the new GIF (animatedhand.gif) above the logo */}
        <Image
          source={animatedHand}
          style={{
            position: "absolute",
            top: "10%", // Adjust to place the GIF at the top of the screen
            left: "74%",
            transform: [{ translateX: -150 }], // Center the GIF horizontally
            width: 300, // Set the width of the GIF
            height: 200, // Set the height of the GIF
            zIndex: 5,
          }}
          contentFit="contain" // Ensures it scales properly
        />

        {/* Logo in center */}
        <LogoContainer>
          <LogoImage source={logo} />
        </LogoContainer>

        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best Way To Track Your Money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best Payment method, connects your money to your friends, family and business
          </SmallText>
          <RegularButton
            btnStyles={{ backgroundColor: colors.accent }}
            textStyles={{ color: colors.white }}
            onPress={() => navigation.navigate("Login")}
          >
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

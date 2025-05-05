import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { colors } from "../components/SendMoneyProps/portraits/colors";
import Profile from "../components/Header/Profile"; // Your Profile component
import logo1 from "../assets/mc.png";
import logo2 from "../assets/visa_white.png";

// Styled components
const AccountContainer = styled.ScrollView`
  background-color: ${colors.graylight};
  flex: 1;
  padding: 20px;
`;

const ProfileHeader = styled.View`
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const ProfileImageContainer = styled.View`
  background-color: ${colors.tertiary};
  padding: 10px;
  border-radius: 50px;
  margin-bottom: 10px;
`;

const ProfileInfo = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const ProfileText = styled(Text)`
  font-size: 18px;
  color: ${props => props.primary ? "#ef835d" : colors.secondary};
  margin-bottom: 5px;
  font-weight: bold;
`;

const CardSectionContainer = styled.View`
  margin-top: 30px;
`;

const CardSectionTitle = styled(Text)`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: bold;
  margin-bottom: 15px;
`;

const CardContainer = styled.View`
  background-color: ${colors.gray};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 15px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardText = styled(Text)`
  font-size: 16px;
  color: ${colors.secondary};
`;

const CardLogo = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: contain;
`;

const CardBalance = styled(Text)`
  font-size: 18px;
  color: ${colors.primary};
  font-weight: bold;
`;

const Account: FunctionComponent = () => {
  return (
    <AccountContainer>
      {/* Profile Section */}
      <ProfileHeader>
        <ProfileImageContainer>
          <Profile img={require("../assets/imad1.png")} />
        </ProfileImageContainer>
        <ProfileInfo>
          <ProfileText secondary>Imad Manni</ProfileText>
          <ProfileText secondary>Developer</ProfileText>
          <ProfileText primary>imadmanni@gmail.com</ProfileText>
        </ProfileInfo>
      </ProfileHeader>

      {/* Card Information Section */}
      <CardSectionContainer>
        <CardSectionTitle>Accounts & Cards</CardSectionTitle>

        {/* Card 1 */}
        <CardContainer>
          <CardRow>
            <CardLogo source={logo2} />
            <CardText>Work Debit</CardText>
          </CardRow>
          <CardBalance>$20,000.15</CardBalance>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer>
          <CardRow>
            <CardLogo source={logo1} />
            <CardText>Personal Prepaid</CardText>
          </CardRow>
          <CardBalance>$12,000.01</CardBalance>
        </CardContainer>

        {/* Card 3 */}
        <CardContainer>
          <CardRow>
            <CardLogo source={logo2} />
            <CardText>School Prepaid</CardText>
          </CardRow>
          <CardBalance>$5,600.83</CardBalance>
        </CardContainer>
      </CardSectionContainer>
    </AccountContainer>
  );
};

export default Account;

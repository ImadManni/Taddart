import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// Fixed import paths (removed extra spaces)
import { colors } from "../SendMoneyProps/portraits/colors";
import RegularText from "../Texts/RegularText";

// Styled Components
const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
  flex: 1;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100px;
  height: 80px;
  resize-mode: contain;
  flex: 1;
`;

// Types
import { BalanceCardProps } from "./types";
import Card_bg from "../Cards/assets/bgcard.png";
import BigText from "../Texts/BigText";

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <CardBackground source={Card_bg}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
                ****** {props?.accountNo?.slice(6,10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
                <BigText
                textStyles={{ marginBottom: 5, color: colors.graylight }}
                >
                    Total Balance
                    </BigText>
                    <RegularText textStyles={{fontSize: 19}}>
                        ${props.balance}
                    </RegularText>
                    </View>
                    <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
    </CardBackground>
  );
};

export default BalanceCard;

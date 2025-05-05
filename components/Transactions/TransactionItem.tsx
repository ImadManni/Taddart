import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// colors
import { colors } from "../SendMoneyProps/portraits/colors";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";

// styled components
const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 1;
`;

const RightView = styled.View`
  flex: 1;
`;

// types
import { TransactionProps } from "./types";

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <SmallText
            textStyles={{
              color: colors.secondary,
              textAlign: "left",
              marginBottom: 5,
            }}
          >
            {props.title}
          </SmallText>
          <SmallText
            textStyles={{
              color: colors.graydark,
            }}
          >
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <SmallText
          textStyles={{
            color: colors.secondary,
            textAlign: "right",
            marginBottom: 5,
          }}
        >
          {props.amount}
        </SmallText>
        <SmallText
          textStyles={{
            textAlign: "right",
            color: colors.graydark,
          }}
        >
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;

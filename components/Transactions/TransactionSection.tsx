import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// colors
import { colors } from "../SendMoneyProps/portraits/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";

// styled components
const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 15px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList``;

// types
import { TransactionSectionProps } from "./types";

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
          Transactions
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent <Ionicons name="caret-down" size={13} color={colors.graydark} />
        </SmallText>
      </TransactionRow>

      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
        ItemSeparatorComponent={() => <TransactionRow style={{ height: 10 }} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;

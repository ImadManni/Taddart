import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import BalanceCard from "./BalanceCard";
const BalanceCardSectionBackground = styled. View`
width: 100%;
align-items: center;
flex: 2;
`;
// types
import { BalanceCardProps } from "./types";

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) =>
{
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props} />
        </BalanceCardSectionBackground>
    );
};

export default BalanceCardSection;
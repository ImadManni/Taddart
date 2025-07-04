import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../SendMoneyProps/portraits/colors";
import { TextProps } from "./types";

const StyledText = styled. Text`
font-size: 15px;
color: ${colors.gray};
text-align: left;
font-family: "Lato-Bold";
`;
const SmallText: FunctionComponent<TextProps> = (props) => {
return <StyledText style={props.textStyles}>{props.children}</StyledText>;

};

export default SmallText;
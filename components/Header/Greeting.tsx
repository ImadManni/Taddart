import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";
import { colors } from "../SendMoneyProps/portraits/colors";
import SmallText from "../Texts/RegularText";
import BigText from "../Texts/BigText";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  `;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles ?: StyleProp<TextStyle>;
    subTextStyles ?: StyleProp<TextStyle>;
}
const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            <BigText
              textStyles={[
                {
                    color: colors.secondary,
                    fontSize: 22,
                },
                props.mainTextStyles,
              ]}
              >
                {props.mainText}
              </BigText>
              <SmallText
                textStyles={[
                    {
                        color: colors.graydark,
                    },
                    props.subTextStyles,
                ]}
                >
                {props.subText}
              </SmallText>
        </StyledView>
    )
}
export default Greeting
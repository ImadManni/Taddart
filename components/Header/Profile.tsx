import { FunctionComponent } from "react";
import styled from "styled-components/native";
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  height: 45px;
  width: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
`;

interface ProfileProps {
  img: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
}

const Profile: FunctionComponent<ProfileProps> = ({
  img,
  imgStyle,
  imgContainerStyle,
}) => {
  const navigation = useNavigation(); // Access navigation

  // Navigate to the Account page when the profile is clicked
  const handlePress = () => {
    navigation.navigate("Account");
  };

  return (
    <StyledView onPress={handlePress} style={imgContainerStyle}>
      <StyledImage style={imgStyle} source={img} />
    </StyledView>
  );
};

export default Profile;

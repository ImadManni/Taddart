import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Welcome from "../screens/welcome";
import Home from "../screens/home";
import Balance from "../screens/Balance";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Account from "../screens/Account";  // ✅ Import Account screen
import ForgotPassword from "../screens/ForgotPassword";
import { LineChart } from "../screens/LineChart"; // ✅ Import LineChart

import { colors } from "./SendMoneyProps/portraits/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "./Header/Profile";
import Imad from "../assets/imad1.png";
import { CardProps } from "./Cards/types";

// ✅ Ajout de LineChart dans RootStackParamList
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Home: undefined;
  Balance: CardProps;
  LineChart: undefined; // ✅ NEW SCREEN
  Account: undefined;  // ✅ Add Account screen
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={Imad}
              imgContainerStyle={{ backgroundColor: colors.tertiary }}
              onPress={() => {
                // Navigate to Account screen when profile is clicked
                navigation.navigate("Account");
              }}
            />
          ),
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting mainText="Hey Imad" subText="Welcome back" {...props} />
            ),
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({ route }) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
        <Stack.Screen
          name="LineChart"
          component={LineChart}
          options={{
            headerTitle: "Transactions Chart", // ✅ Titre en haut
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          }}
        />
        <Stack.Screen
          name="Account"  // ✅ Account Screen
          component={Account}
          options={{
            headerTitle: "Your Account", // Set a title for the Account screen
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                {...props}
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Login successful!");
      navigation.navigate("Home");
    } catch (error: any) {
      Alert.alert("Login failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.desc}>Please log in to continue</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={24} color="#ef835d" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Feather name="lock" size={24} color="#ef835d" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        {/* Forgot Password Link with Google Icon */}
        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <View style={styles.forgotPasswordContent}>
            <AntDesign name="google" size={18} color="#ef835d" style={{ marginRight: 6 }} />
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Logo and Slogan */}
        <View style={styles.logoContainer}>
          <Image source={require("../assets/taddart.png")} style={styles.logo} />
          <Text style={styles.slogan}>Track Smart, Spend Smarter</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#147079",
    paddingHorizontal: 25,
    justifyContent: "space-between",
  },
  headerContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  formContainer: {
    marginBottom: 20,
  },
  footerContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  slogan: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    fontStyle: "italic",
    opacity: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5EBFF",
    borderRadius: 12,
    overflow: "hidden",
  },
  inputIcon: {
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  input: {
    flex: 1,
    paddingVertical: 18,
    paddingRight: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  button: {
    paddingVertical: 18,
    backgroundColor: "#ef835d",
    borderRadius: 12,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  signupText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  signupLink: {
    textAlign: "center",
    fontSize: 16,
    color: "#1F8BEF",
    textDecorationLine: "underline",
    fontWeight: "700",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 10,
    marginTop: -10,
  },
  forgotPasswordContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPasswordText: {
    color: "#1F8BEF",
    textDecorationLine: "underline",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Login;

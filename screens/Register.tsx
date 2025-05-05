import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the correct function
import { auth } from "../firebase.config"; // Import auth

const Register = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password); // Correct method call
      Alert.alert("Success", "Registration successful!");
      navigation.navigate("Login"); // Navigate to login after successful registration
    } catch (error: any) {
      Alert.alert("Registration failed", error.message); // Show error message
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.desc}>Fill in the details to register</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign name="user" size={24} color="#ef835d" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#888"
              value={username}
              onChangeText={setUsername}
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={24} color="#ef835d" style={styles.inputIcon} />
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

        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Feather name="lock" size={24} color="#ef835d" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupLink}>Login</Text>
          </TouchableOpacity>
        </View>

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
    width: 150,
    height: 150,
    marginBottom: 20,
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
});

export default Register;

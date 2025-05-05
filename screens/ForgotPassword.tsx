import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../components/rootstack";
import { auth } from "../firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";

type Props = StackScreenProps<RootStackParamList, "ForgotPassword">;

const ForgotPassword = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success", "Password reset link has been sent to your email. Please check your inbox (or spam folder).");
      navigation.navigate("Login");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        Alert.alert("Error", "No user found with that email address.");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Error", "The email address is not valid.");
      } else {
        Alert.alert("Error", "An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section with Logo */}
      <View style={styles.headerContainer}>
        <Image source={require("../assets/taddart.png")} style={styles.logo} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.desc}>Enter your email to reset your password</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign name="mail" size={24} color="#ef835d" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset} disabled={loading}>
          <Text style={styles.textButton}>{loading ? "Sending..." : "Submit"}</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
  slogan: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    fontStyle: "italic",
    opacity: 0.8,
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
  linkText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#1F8BEF",
    marginBottom: 20,
  },
});

export default ForgotPassword;

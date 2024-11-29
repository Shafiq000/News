import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);  
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("userrr",user);
      Alert.alert("Success", `Signup successful for ${user.email}`);
      router.push("/(tabs)"); 
    } catch (error) {
      console.error("Signup Error: ", error);
      Alert.alert("Error", error.message);
    }
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      // Firebase sign-in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("userrr",user);
      
      Alert.alert("Success", `Welcome back, ${user.email}`);
      router.push("/(tabs)"); 
    } catch (error) {
      console.error("Sign-In Error: ", error);
      Alert.alert("Error", error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email to reset the password.");
      return;
    }

    try {
      // Firebase password reset
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Success", "Password reset email sent!");
      setIsForgotPassword(false);  
    } catch (error) {
      console.error("Password Reset Error: ", error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80} 
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.logoContainer}>
            <Image source={require("../assets/images/logo.png")} style={styles.logo} />
          </View>

          <Text style={styles.title}>{isForgotPassword ? "Reset Password" : "Signup"}</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {!isForgotPassword && (
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          )}

          {!isForgotPassword ? (
            <>
              <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <Text style={styles.orText}>OR</Text>

              <TouchableOpacity style={styles.secondaryButton} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setIsForgotPassword(true)} style={styles.forgotPasswordText}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
              <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  secondaryButton: {
    width: "100%",
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 18,
    marginVertical: 10,
    color: "#555",
  },
  forgotPasswordText: {
    color: "#1E90FF",
    fontSize: 16,
    marginTop: 10,
  },
});

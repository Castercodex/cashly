import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ImageSourcePropType } from "react-native";

interface WelcomeProps {
  logo: ImageSourcePropType;
}

const Welcome = ({ logo }: WelcomeProps) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Image source={logo} style={{ width: 40, height: 40 }} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Track Your Expenses Effortlessly with{" "}
          <Text style={{ color: colors.primary }}>Cashly</Text>
        </Text>
        <TouchableOpacity
          style={[styles.primaryBtn, { backgroundColor: colors.primary }]}
        >
          <Text style={{ color: colors.background }}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={[styles.label, { color: colors.text, opacity: 0.5 }]}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.loginText,
                {
                  color: colors.primary,
                },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure this takes full screen height
    // paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: "100%", // Ensure the container stretches fully
  },
  content: {
    justifyContent: "center",
    top: "40%",
  },
  title: {
    fontSize: 50,
  },
  primaryBtn: {
    height: 50,
    borderRadius: 50,
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row", // Ensure horizontal alignment
    justifyContent: "center", // Center content horizontally
    marginTop: 30,
    alignItems: "center", // Center items vertically
  },
  label: {
    fontSize: 16,
    textAlign: "center",
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Welcome;

import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "../helpers/common";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />
      <Animated.View entering={FadeInDown.duration(600)} style={{ flex: 1 }}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
        <View style={styles.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            Pixels
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.punchline}
          >
            Every pixel tells a story
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600).springify()}>
            <Pressable
              style={styles.startButton}
              onPress={() => router.push("/home")}
            >
              <Text style={styles.startText}>Start Exploring</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    width: wp(100),
    height: hp(65),
    bottom: 0,
    position: "absolute",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    height: hp(100),
    gap: 14,
  },
  title: {
    fontSize: hp(7),
    fontWeight: "bold",
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginBottom: 10,
    fontWeight: "medium",
  },
  startButton: {
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 90,
    backgroundColor: "black",
    borderRadius: 50,
    borderCurve: "continuous",
  },
  startText: {
    color: "white",
    fontSize: hp(3),
    letterSpacing: 1,
    fontWeight: "medium",
  },
});

export default WelcomeScreen;

import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const AdjustMeditationDuration = () => {
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>AdjustMeditationDuration</Text>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;

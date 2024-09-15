import { FlatList, View, Text, Pressable, ImageBackground } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditationData";
import MEDITATION_IMAGES from "@/constants/meditationImages";
import { LinearGradient } from "expo-linear-gradient";
const natureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <SafeAreaView className="mb-6">
          <View>
            <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
              NatureMeditate
            </Text>
            <Text className="text-indigo-100  mb-5 text-xl font-medium">
              Start your meditation practice today
            </Text>
          </View>
          <View>
            <FlatList
              data={MEDITATION_DATA}
              className="mb-20"
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => console.log("tap")}
                  className="h-48 my-3 rounded-md overflow-hidden"
                >
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode="cover"
                    className="flex-1 rounded-lg justify-center"
                  >
                    <LinearGradient  colors={["transparent", "rgba(0,0,0,0.8)",]} className="flex-1 justify-center items-center">
                      <Text className="text-green-100 text-3xl font-bold text-center">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )}
            />
          </View>
        </SafeAreaView>
      </AppGradient>
    </View>
  );
};

export default natureMeditate;
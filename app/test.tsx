import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const test = () => {
  return (
    <SafeAreaView className=" flex-1 bg-slate-700 flex-1 justify-center items-center ">
      <Text className=" text-gray-50">Hello it's Test Page</Text>
    </SafeAreaView>
  );
};

export default test;

import React, { useCallback } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import images from "@/constants/images";

const SplashScreen = () => {
  const router = useRouter();

  const handleGetStarted = useCallback(() => {
    router.replace("/(tabs)");
  }, [router]);

  return (
    <SafeAreaView className="flex-1 bg-[#EA7A53]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* Pattern Image */}
        <View>
          <Image
            source={images.splashPattern}
            resizeMode="contain"
            className="mt-10 w-full"
          />
        </View>

        {/* Content */}
        <View className="px-6 p-12">
          <View className="items-center">
            <Text className="text-white text-4xl font-sans-extrabold mb-2">
              Gain Financial Clarity
            </Text>

            <Text className="text-white/90 text-lg font-sans-medium mb-8">
              Track, analyze and cancel with ease
            </Text>
          </View>

          {/* CTA Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-full py-4 items-center"
            onPress={handleGetStarted}
          >
            <Text className="text-[#1F2937] text-lg font-sans-bold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SplashScreen;

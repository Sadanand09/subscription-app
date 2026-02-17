import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView className="flex-1 bg-[#EA7A53]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Image
            source={images.splashPattern}
            resizeMode="contain"
            className="mt-10 w-full"
          />
        </View>
        <View className="px-6 p-12">
          <View className="items-center">
            <Text className="text-white text-4xl font-bold mb-2">
              Gain Financial Clarity
            </Text>

            <Text className="text-white/90 text-base mb-8">
              Track, analyze and cancel with ease
            </Text>
          </View>

          {/* CTA Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-full py-4 items-center"
            onPress={() => router.replace("/(tabs)")}
          >
            <Text className="text-[#1F2937] text-base font-semibold">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SplashScreen;
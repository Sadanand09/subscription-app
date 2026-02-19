import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const Setting = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF9E3]">
      <View className="flex-1 justify-center items-center px-6">
        {/* Title */}
        <Text className="text-[#081126] text-3xl font-sans-bold text-center">
          Under Build
        </Text>

        {/* Subtitle */}
        <Text className="text-black/60 text-base font-sans-medium text-center mt-4 leading-6">
          This screen is currently under development.
          {"\n"}
          We&apos;re working hard to bring this feature soon.
        </Text>

        {/* Status pill */}
        <View className=" border rounded-full px-6 py-3 mt-8">
          <Text className="text-[#EA7A53] font-sans-semibold text-sm">
            Coming Soon
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Setting
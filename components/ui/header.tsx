import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { router } from "expo-router";

import { icons } from "@/constants/icons";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <View className="flex flex-row items-center justify-between pb-6">
      <TouchableOpacity onPress={() => router.back()} className="h-16 w-16">
        <Image source={icons.back} className="w-full h-full" />
      </TouchableOpacity>
      <Text className="text-2xl font-sans-bold">{title}</Text>
      <TouchableOpacity className="h-16 w-16">
        <Image source={icons.menu} className="w-full h-full" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

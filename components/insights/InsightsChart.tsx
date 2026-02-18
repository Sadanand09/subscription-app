import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { barData } from "@/constants/data/insights";

export const InsightsChart = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(3);

  const chartData = barData.map((item, index) => ({
    value: item.value,
    label: item.label,
    frontColor: selectedIndex === index ? "#EA7A53" : "#081126",
    onPress: () => setSelectedIndex(index),
    topLabelComponent:
      selectedIndex === index
        ? () => (
            <View className="bg-white p-auto mb-2">
              <Text className="text-[#000000] text-sm text-center">
                ${item.value}
              </Text>
            </View>
          )
        : undefined,
  }));

  return (
    <View className="bg-[#F6EECF] rounded-2xl p-4 py-6">
      <BarChart
        data={chartData}
        barWidth={12}
        spacing={30}
        maxValue={45}
        noOfSections={4}

        /* Rounded bars */
        roundedTop
        roundedBottom

        /* Grid */
        rulesType="dashed"
        rulesColor="#D6D0B8"

        /* Axes */
        yAxisThickness={0}
        xAxisThickness={0}
        yAxisTextStyle={{ color: "#6B7280" }}
        xAxisLabelTextStyle={{ color: "#374151" }}

        /* Animation */
        isAnimated
        animationDuration={600}

        /* Gradient support */
        LinearGradient={LinearGradient}
      />
    </View>
  );
};

import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { useState } from "react";
import { barData } from "@/constants/data/insights";

export const InsightsChart = () => {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const chartData = barData.map((item, index) => ({
    value: item.value,
    label: item.label,
    frontColor: selectedIndex === index ? "#EA7A53" : "#081126",
    onPress: () => setSelectedIndex(index),
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

        /* Animation */
        isAnimated
        animationDuration={600}

        /* Tooltip positioning */
        leftShiftForTooltip={20}

        /* Floating tooltip (pill + arrow) */
        renderTooltip={(item: any, index: number) =>
          selectedIndex === index ? (
            <View style={{ alignItems: "center" }}>
              {/* Pill */}
              <View
                style={{
                  backgroundColor: "#FFFFFF",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 12,
                  marginBottom: 4,
                  minWidth: 52,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontSize: 14,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  ${item.value}
                </Text>
              </View>

              {/* Arrow */}
              <View
                style={{
                  width: 0,
                  height: 0,
                  borderLeftWidth: 6,
                  borderRightWidth: 6,
                  borderTopWidth: 6,
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "#FFFFFF",
                }}
              />
            </View>
          ) : null
        }
      />
    </View>
  );
};

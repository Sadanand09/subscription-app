import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { monthlyStats, expenses } from "@/constants/data/insights";
import { BarChart } from "@/components/insights/BarChart";

export default function Insights() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF8E7]">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6 mt-6">
          <Text className="text-2xl font-bold mb-6">Monthly Insights</Text>

          {/* Chart */}
          <View className="bg-[#FFF8E7] border border-black/10 rounded-2xl p-4">
            <Text className="font-semibold mb-2">Upcoming</Text>
            <BarChart data={monthlyStats} />
          </View>

          {/* Expenses */}
          <View className="mt-6 bg-[#FFF8E7] border border-black/10 rounded-2xl p-4">
            <Text className="text-sm text-black/60">Expenses</Text>
            <Text className="text-2xl font-bold mt-1">${expenses.amount}</Text>
            <Text className="text-sm text-green-600 mt-1">
              {expenses.change}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

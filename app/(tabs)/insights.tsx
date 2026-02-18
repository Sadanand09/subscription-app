import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/common/header";
import { SubscriptionRow } from "@/components/home/SubscriptionRow";
import { InsightsChart } from "@/components/insights/InsightsChart";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { subscriptions } from "@/constants/data/home";
import { expenses } from "@/constants/data/insights";

export default function Insights() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF9E3] p-6">
      <View>
        <Header title="Monthly Insights" />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="my-2">
          <SectionHeader title="Upcoming" action="View all" />
        </View>

        <View>
          <InsightsChart />
        </View>
        {/* Expenses */}
        <View className="mt-6 border border-black/10 rounded-2xl p-4 gap-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold mt-1">Expenses</Text>
            <Text className="text-xl font-bold mt-1">${expenses.amount}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-base text-black/60">March 2026</Text>
            <Text className="text-base text-green-600 mt-1">
              {expenses.change}
            </Text>
          </View>
        </View>
        <View className="mt-10">
          <SectionHeader title="History" action="View all" />
          <View className="gap-4">
            {subscriptions.map((item) => (
              <SubscriptionRow key={item.id} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

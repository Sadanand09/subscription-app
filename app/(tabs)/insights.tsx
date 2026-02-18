import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/common/header";
import { SubscriptionRow } from "@/components/home/SubscriptionRow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { subscriptions } from "@/constants/data/home";
import { InsightsChart } from "@/components/insights/InsightsChart";

export default function Insights() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF9E3] p-6">
      <View>
        <Header title="Monthly Insights" />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        <View className="my-2">
          <SectionHeader title="Upcoming" action="View all" />
        </View>

        <View>
          <InsightsChart />
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

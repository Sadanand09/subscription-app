import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { mySubscriptions } from "@/constants/data/subscriptions";
import { SubscriptionItem } from "@/components/subscription/SubscriptionItem";

export default function Subscriptions() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFF8E7]">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="px-6 mt-6">
          <Text className="text-2xl font-bold mb-6">My Subscriptions</Text>

          <View className="gap-4">
            {mySubscriptions.map((item) => (
              <SubscriptionItem key={item.id} {...item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

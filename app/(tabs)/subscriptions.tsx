import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { mySubscriptions } from "@/constants/data/subscriptions";
import { SubscriptionItem } from "@/components/subscription/SubscriptionItem";
import Header from "@/components/common/header";
import { useState } from "react";

export default function Subscriptions() {
   const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 p-6 bg-[#FFF9E3]">
      <View>
        <Header title="My Subscriptions" />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-4">
          {mySubscriptions.map((item) => (
            <SubscriptionItem
              key={item.id}
              {...item}
              expanded={openId === item.id}
              onPress={() =>
                setOpenId((prev) => (prev === item.id ? null : item.id))
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

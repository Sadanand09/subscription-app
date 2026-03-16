import { useState } from "react";

import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SubscriptionItem } from "@/components/subscription/SubscriptionItem";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { Header } from "@/components/ui/header";

import { mySubscriptions } from "@/constants/data/subscriptions";

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
          {mySubscriptions.map((item, index) => (
            <AnimatedEntry key={item.id} index={index} delayPerIndex={80} duration={400}>
              <SubscriptionItem
                {...item}
                expanded={openId === item.id}
                onPress={() =>
                  setOpenId((prev) => (prev === item.id ? null : item.id))
                }
              />
            </AnimatedEntry>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

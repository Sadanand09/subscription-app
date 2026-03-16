import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BalanceCard } from "@/components/home/BalanceCard";
import { UpcomingCard } from "@/components/home/UpcomingCard";
import { SubscriptionRow } from "@/components/home/SubscriptionRow";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { SectionHeader } from "@/components/ui/SectionHeader";

import images from "@/constants/images";
import { icons } from "@/constants/icons";
import { user, balance, upcoming, subscriptions } from "@/constants/data/home";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 p-6 bg-[#FFF9E3]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row justify-between items-center">
          <View className="flex-row">
            <Image source={images.avatar} className="w-16 h-16 rounded-full" />
            <Text className="text-2xl font-sans-bold my-auto ml-4">
              {user.name}
            </Text>
          </View>

          <Image source={icons.add} className="w-16 h-16" />
        </View>

        <AnimatedEntry index={0}>
          <View className="mt-6">
            <BalanceCard {...balance} />
          </View>
        </AnimatedEntry>

        <AnimatedEntry index={1}>
          <View className="mt-8">
            <SectionHeader title="Upcoming" action="View all" />
          </View>
        </AnimatedEntry>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {upcoming.map((item, index) => (
            <AnimatedEntry key={item.id} index={index + 2} direction="right">
              <UpcomingCard {...item} />
            </AnimatedEntry>
          ))}
        </ScrollView>

        <View className="mt-10">
          <AnimatedEntry index={upcoming.length + 2}>
            <SectionHeader title="All Subscriptions" action="View all" />
          </AnimatedEntry>
          <View className="gap-4">
            {subscriptions.map((item, index) => (
              <AnimatedEntry key={item.id} index={index + upcoming.length + 3}>
                <SubscriptionRow {...item} />
              </AnimatedEntry>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

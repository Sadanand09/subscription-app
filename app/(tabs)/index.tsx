import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { user, balance, upcoming, subscriptions } from "@/constants/data/home";

import { BalanceCard } from "@/components/home/BalanceCard";
import { UpcomingCard } from "@/components/home/UpcomingCard";
import { SubscriptionRow } from "@/components/home/SubscriptionRow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import images from "@/constants/images";
import { icons } from "@/constants/icons";

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
            <Text className="text-2xl font-semibold my-auto ml-4">
              {user.name}
            </Text>
          </View>

          <Image source={icons.add} className="w-16 h-16" />
        </View>
        <View className="mt-6">
          <BalanceCard {...balance} />
        </View>

        <View className="mt-8">
          <SectionHeader title="Upcoming" action="View all" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {upcoming.map((item) => (
            <UpcomingCard key={item.id} {...item} />
          ))}
        </ScrollView>

        <View className="mt-10">
          <SectionHeader title="All Subscriptions" action="View all" />
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

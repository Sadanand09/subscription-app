import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";

type TabIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
};

const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View className="items-center justify-center w-12 h-12">
      <View
        className={`items-center justify-center rounded-full ${
          focused ? "bg-[#EA7A53]" : "bg-transparent"
        } w-12 h-12`}
      >
        <Image source={icon} resizeMode="contain" className="w-6 h-6" />
      </View>
    </View>
  );
};

export default function TabsLayout() {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 34,
            height: 64,
            marginHorizontal: 20,
            borderRadius: 32,
            backgroundColor: "#081126",
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.home} />
            ),
          }}
        />

        <Tabs.Screen
          name="subscriptions"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.wallet} />
            ),
          }}
        />

        <Tabs.Screen
          name="insights"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.activity} />
            ),
          }}
        />

        <Tabs.Screen
          name="setting"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={icons.setting} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

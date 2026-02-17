import { View, Text, Image, Pressable } from "react-native";

type Props = {
  id: string;
  name: string;
  icon?: any;
  price: number;
  billing: string;
  plan: string;
  expanded: boolean;
  onPress: () => void;
};

export const SubscriptionItem = ({
  name,
  icon,
  price,
  billing,
  plan,
  expanded,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={`border border-black/10 rounded-2xl p-4 ${
        expanded ? "bg-[#8FD1BD]" : "bg-[#FFF8E7]"
      }`}
    >
      {/* TOP ROW */}
      <View className="flex-row justify-between items-center py-2">
        <View className="flex-row items-center gap-3">
          <Image source={icon} className="w-16 h-16 rounded-lg" />
          <View>
            <Text className="text-lg font-semibold">{name}</Text>
            <Text className="text-sm text-black/60">{plan}</Text>
          </View>
        </View>

        <View className="items-end">
          <Text className="text-lg font-semibold">${price.toFixed(2)}</Text>
          <Text className="text-sm text-black/60">{billing}</Text>
        </View>
      </View>

      {/* EXPANDED CONTENT */}
      {expanded && (
        <View className="mt-6 gap-4">
          <View className="flex-col justify-between gap-6">
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-2">
                <Text className="text-base text-black/60">Payment info:</Text>
                <Text className="font-medium">*****8530</Text>
              </View>
              <Pressable className="border border-black/30 rounded-full py-1 px-5  items-center">
                <Text className="font-medium">Manage</Text>
              </Pressable>
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-2">
                <Text className="text-base text-black/60">Plan details:</Text>
                <Text className="font-medium">Premium</Text>
              </View>
              <Pressable className="border border-black/30 rounded-full py-1 px-5 items-center">
                <Text className="font-medium">Change</Text>
              </Pressable>
            </View>
          </View>

          <Pressable className="bg-[#081126] rounded-full py-4 items-center mt-2">
            <Text className="text-white font-semibold">
              Cancel Subscription
            </Text>
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

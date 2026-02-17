import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  price: number;
  billing: string;
};

export const SubscriptionItem = ({ name, price, billing }: Props) => {
  return (
    <View className="bg-[#FFF8E7] border border-black/10 rounded-2xl p-4 flex-row justify-between items-center">
      <View>
        <Text className="text-base font-semibold">{name}</Text>
        <Text className="text-sm text-black/60">{billing}</Text>
      </View>

      <Text className="text-base font-semibold">${price.toFixed(2)}</Text>
    </View>
  );
};

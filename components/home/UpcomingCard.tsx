import { View, Text, Image } from "react-native";

interface Props {
  icon?: any;
  name: string;
  price: number;
  daysLeft: number;
}

export const UpcomingCard = ({ name, price, daysLeft, icon }: Props) => (
  <View className="w-44 p-4 rounded-2xl border border-black/10 bg-[#FFF9E3] mr-4">
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="w-14 h-14" />
      <View>
        <Text className="text-lg font-sans-bold">${price.toFixed(2)}</Text>
        <Text className="text-sm font-sans-semibold text-black/60">
          {daysLeft} days left
        </Text>
      </View>
    </View>

    <Text className="mt-2 font-sans-bold text-lg">{name}</Text>
  </View>
);

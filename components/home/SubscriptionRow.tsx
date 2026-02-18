import { View, Text, Image } from "react-native";

interface Props {
  icon?: any;
  name: string;
  date: string;
  price: number;
  billing: string;
  color?: string;
}

export const SubscriptionRow = ({
  name,
  icon,
  date,
  price,
  billing,
  color,
}: Props) => (
  <View
    style={{ backgroundColor: color ?? "#FFF8E7" }}
    className="rounded-se-3xl rounded-tr-3xl p-4 flex-row justify-between items-center"
  >
    <View className="flex-row items-center gap-2">
      <Image source={icon} className="w-16 h-16 mb-2" />
      <View>
        <Text className="text-lg mb-1 font-sans-bold">{name}</Text>
        <Text className="text-sm opacity-70 font-sans-medium">{date}</Text>
      </View>
    </View>
    <View>
      <Text className="text-lg mb-1 font-sans-bold">${price}</Text>
      <Text className="text-sm font-sans-medium">{billing}</Text>
    </View>
  </View>
);

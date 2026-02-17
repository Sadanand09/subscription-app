import { View, Text } from "react-native";

interface Props {
  amount: number;
  date: string;
}

export const BalanceCard = ({ amount, date }: Props) => (
  <View className="bg-[#EA7A53] rounded-se-3xl rounded-tr-3xl gap-5 mb-4 p-6">
    <View className="">
      <Text className="text-white/80 font-medium text-2xl">Balance</Text>
    </View>
    <View className="flex flex-row justify-between items-center">
      <Text className="text-white text-4xl font-bold">
        ${amount.toFixed(2)}
      </Text>
      <Text className="text-white font-medium text-xl">{date}</Text>
    </View>
  </View>
);

import { View, Text } from "react-native";

type Props = {
  data: { day: string; value: number }[];
};

export const BarChart = ({ data }: Props) => {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <View className="flex-row items-end justify-between h-40 mt-4">
      {data.map((item) => (
        <View key={item.day} className="items-center">
          <View
            style={{
              height: `${(item.value / max) * 100}%`,
            }}
            className="w-4 bg-[#EA7A53] rounded-full"
          />
          <Text className="text-xs mt-2">{item.day}</Text>
        </View>
      ))}
    </View>
  );
};

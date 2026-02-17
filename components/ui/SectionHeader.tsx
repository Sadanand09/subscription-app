import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  action?: string;
}

export const SectionHeader = ({ title, action }: Props) => (
  <View className="flex-row items-center justify-between mb-5">
    <Text className="text-2xl font-semibold">{title}</Text>
    {action && (
      <TouchableOpacity className="px-4 py-1 rounded-full border border-black/20">
        <Text className="text-lg font-medium">{action}</Text>
      </TouchableOpacity>
    )}
  </View> 
);

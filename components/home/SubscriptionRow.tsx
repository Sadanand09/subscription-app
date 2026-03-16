import { Text, Image, View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {
  icon?: any;
  name: string;
  date?: string;
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
}: Props) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPressIn={() => {
        scale.value = withSpring(0.97, { damping: 20, stiffness: 300 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 20, stiffness: 300 });
      }}
      style={[
        animatedStyle,
        {
          backgroundColor: color ?? "#FFF8E7",
          borderTopRightRadius: 24,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
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
    </AnimatedPressable>
  );
};

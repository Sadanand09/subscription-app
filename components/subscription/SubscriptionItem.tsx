import { View, Text, Image, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type Props = {
  id: string;
  name: string;
  icon?: any;
  price: number;
  billing: string;
  plan?: string;
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
  const progress = useSharedValue(0);
  const scale = useSharedValue(1);
  const clipHeight = useSharedValue(0);

  useEffect(() => {
    progress.value = withSpring(expanded ? 1 : 0, {
      damping: 20,
      stiffness: 150,
    });
    if (expanded) {
      clipHeight.value = withSpring(260, { damping: 22, stiffness: 160 });
    } else {
      clipHeight.value = withTiming(0, {
        duration: 280,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [expanded, progress, clipHeight]);

  const containerStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ["#FFF8E7", "#8FD1BD"]
    ),
    transform: [{ scale: scale.value }],
  }));

  const clipStyle = useAnimatedStyle(() => ({
    maxHeight: clipHeight.value,
    overflow: "hidden",
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * 10 }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.97, { damping: 20, stiffness: 300 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 20, stiffness: 300 });
      }}
      style={[
        containerStyle,
        {
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.1)",
          borderRadius: 16,
          padding: 16,
        },
      ]}
    >
      {/* TOP ROW */}
      <View className="flex-row justify-between items-center py-2">
        <View className="flex-row items-center gap-3">
          <Image source={icon} className="w-16 h-16 rounded-lg" />
          <View>
            <Text className="text-lg mb-1 font-sans-bold">{name}</Text>
            <Text className="text-sm font-sans-semibold text-black/60">
              {plan}
            </Text>
          </View>
        </View>

        <View className="items-end">
          <Text className="text-lg mb-1 font-sans-bold">
            ${price.toFixed(2)}
          </Text>
          <Text className="text-sm font-sans-medium text-black/60">
            {billing}
          </Text>
        </View>
      </View>

      {/* EXPANDED CONTENT */}
      <Animated.View style={clipStyle}>
        <Animated.View style={contentStyle} className="mt-6 gap-4">
          <View className="flex-col justify-between gap-6">
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-2">
                <Text className="text-base font-sans-medium text-black/60">
                  Payment info:
                </Text>
                <Text className="font-sans-bold">*****8530</Text>
              </View>
              <Pressable className="border border-black/30 rounded-full py-1 px-5 items-center">
                <Text className="font-sans-bold">Manage</Text>
              </Pressable>
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-2">
                <Text className="text-base font-sans-medium text-black/60">
                  Plan details:
                </Text>
                <Text className="font-sans-bold">Premium</Text>
              </View>
              <Pressable className="border border-black/30 rounded-full py-1 px-5 items-center">
                <Text className="font-sans-bold">Change</Text>
              </Pressable>
            </View>
          </View>

          <Pressable className="bg-[#081126] rounded-full py-4 items-center mt-2">
            <Text className="text-white font-sans-bold">
              Cancel Subscription
            </Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </AnimatedPressable>
  );
};

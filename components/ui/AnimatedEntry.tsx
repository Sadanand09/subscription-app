import { useEffect } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";

interface Props {
  children: React.ReactNode;
  index: number;
  direction?: "up" | "right";
  delayPerIndex?: number;
  duration?: number;
}

export const AnimatedEntry = ({
  children,
  index,
  direction = "up",
  delayPerIndex = 70,
  duration = 380,
}: Props) => {
  const opacity = useSharedValue(0);
  const translate = useSharedValue(direction === "right" ? -20 : 24);

  // Entry animation runs once on mount — deps intentionally omitted
  useEffect(() => {
    const delay = index * delayPerIndex;
    opacity.value = withDelay(
      delay,
      withTiming(1, { duration, easing: Easing.out(Easing.ease) })
    );
    translate.value = withDelay(
      delay,
      withSpring(0, { damping: 18, stiffness: 120 })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      direction === "right"
        ? { translateX: translate.value }
        : { translateY: translate.value },
    ],
  }));

  return <Animated.View style={style}>{children}</Animated.View>;
};

import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Sans-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Sans-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Sans-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "Sans-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Sans-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Sans-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}

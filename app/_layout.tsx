import { Inter_500Medium, useFonts } from "@expo-google-fonts/inter";
import { Search } from "@tamagui/lucide-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { TamaguiProvider, XStack, createTamagui } from "tamagui";

// some nice defaults:
import { config } from "@tamagui/config/v2";
import { ToastProvider } from "@tamagui/toast";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayoutNav() {
  const queryClient = new QueryClient();
  const [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
  });
  let colorScheme = useColorScheme();
  console.log("colorScheme", colorScheme);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider
        config={tamaguiConfig}
        defaultTheme={colorScheme === "dark" ? "dark" : "light"}
      >
        <ToastProvider>
          <>
            <Drawer
              screenOptions={{
                headerStyle: {
                  backgroundColor: colorScheme === "dark" ? "#1e2227" : "#fff",
                },
                headerTintColor: colorScheme === "dark" ? "#fff" : "#1e2227",
              }}
            >
              <Drawer.Screen
                name="index" // This is the name of the page and must match the url from root
                options={{
                  drawerLabel: "Home",
                  title: "Home",
                  headerRight: () => (
                    <XStack mx={10}>
                      <Search />
                    </XStack>
                  ),
                }}
              />
              <Drawer.Screen
                name="gallery" // This is the name of the page and must match the url from root
                options={{
                  drawerLabel: "Gallery",
                  title: "Gallery",
                }}
              />
              <Drawer.Screen
                name="about" // This is the name of the page and must match the url from root
                options={{
                  drawerLabel: "About",
                  title: "About",
                }}
              />
              <Drawer.Screen
                name="list" // This is the name of the page and must match the url from root
                options={{
                  drawerLabel: "List",
                  title: "List",
                }}
              />
              {/* <Drawer.Screen
            name="user/[id]" 
            options={{
              drawerLabel: "User",
              title: "overview",
            }}
          /> */}
            </Drawer>
            {/* <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="gallery" options={{ title: "Gallery" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
      </Stack> */}
          </>
        </ToastProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}

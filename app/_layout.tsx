import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Search } from "lucide-react-native";
import { useColorScheme, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayoutNav() {
  const queryClient = new QueryClient();
  let colorScheme = useColorScheme();
  console.log("colorScheme", colorScheme);

  console.log("📌 colorScheme", colorScheme);

  return (
    <QueryClientProvider client={queryClient}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#1e2227" : "#fff",
          },
          headerTintColor: colorScheme === "dark" ? "#fff" : "#1e2227",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
            headerRight: () => (
              <View style={{ marginHorizontal: 10 }}>
                <Search
                  size={24}
                  color={colorScheme === "dark" ? "#fff" : "#000"}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="gallery"
          options={{
            drawerLabel: "Gallery",
            title: "Gallery",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About",
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "List",
            title: "List",
          }}
        />
      </Drawer>
    </QueryClientProvider>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Drawer } from "expo-router/drawer";
import { TamaguiProvider, createTamagui } from "tamagui";

// some nice defaults:
import { config } from "@tamagui/config/v2";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayoutNav() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig}>
        <Drawer>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Home",
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
      </TamaguiProvider>
    </QueryClientProvider>
  );
}

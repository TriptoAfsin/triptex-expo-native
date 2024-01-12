import React from "react";
import { View, useColorScheme } from "react-native";

function ThemeContainer({ children }) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        backgroundColor: colorScheme === "light" ? "#ffffff" : "#1a1d1e",
      }}
    >
      {children}
    </View>
  );
}

export default ThemeContainer;

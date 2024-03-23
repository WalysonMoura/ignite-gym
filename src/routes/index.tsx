import { Box } from "@gluestack-ui/themed";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuhtRoutes } from "./auth.routes";
import { config } from "@/components/gluestack-ui.config";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = config.tokens.colors.gray700;
 
  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuhtRoutes />
      </NavigationContainer>
    </Box>
  );
}

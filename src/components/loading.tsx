import { Center, Spinner } from "@gluestack-ui/themed";
import React from "react";

export function Loading() {
  return (
    <Center flex={1} bg="$gray700">
      <Spinner color="green500" />
    </Center>
  );
}

import { Box, BoxProps } from "@/src/components/Box";

import { PropsWithChildren } from "react";

export function Screen({
  children,
  ...boxProps
}: PropsWithChildren & BoxProps) {
  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...boxProps}
    >
      {children}
    </Box>
  );
}

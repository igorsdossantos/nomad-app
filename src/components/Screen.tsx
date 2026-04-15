import { Box, BoxProps } from "@/src/components/Box";

import { PropsWithChildren } from "react";

export function Screen({
  children,
  ...boxProps
}: PropsWithChildren & BoxProps) {
  return (
    <Box backgroundColor="background" paddingHorizontal="s16" {...boxProps}>
      {children}
    </Box>
  );
}

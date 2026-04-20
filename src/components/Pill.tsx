import { Box, BoxProps } from "./Box";
import { Icon, IconName } from "./Icon";
import { Text } from "./Text";

export type PillProps = {
  iconName: IconName;
  label: string;
  active: boolean;
};

export function Pill({ iconName, label, active }: PillProps) {
  return (
    <Box {...boxStyle} backgroundColor={active ? "gray1" : "transparent"}>
      <Icon name={iconName} size={16} color={active ? "primary" : "gray1"} />
      <Text ml="s4" variant="text12">
        {label}
      </Text>
    </Box>
  );
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 2,
  borderRadius: "rounded",
  paddingVertical: "s8",
  paddingHorizontal: "s12",
  borderColor: "gray1",
};

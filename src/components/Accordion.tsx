import theme from "@/src/theme/theme";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type AccordionProps = {
  title: string;
  description: string;
};

export default function Accordion({ title, description }: AccordionProps) {
  const isOpen = useSharedValue(false);

  function handleOpenPress() {
    isOpen.value = !isOpen.value;
  }

  return (
    <Pressable onPress={handleOpenPress}>
      <View>
        <AccordionHeader title={title} />
        <AccordionBody description={description} isOpen={isOpen} />
      </View>
    </Pressable>
  );
}

function AccordionHeader({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>
      <Icon name="Chevron-down" color="gray1" />
    </View>
  );
}

function AccordionBody({
  description,
  isOpen,
}: {
  description: string;
  isOpen: SharedValue<boolean>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: isOpen.value ? 100 : 0,
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <View style={styles.body}>
        <Text>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderRadius: theme.borderRadii.default,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
});

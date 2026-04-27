import { CategoryPill } from "@/src/components/CategoryPill";
import { IconButton } from "@/src/components/IconButton";
import { PILL_HEIGHT } from "@/src/components/Pill";
import { router } from "expo-router";
import { ImageBackground, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlackOpacity } from "../components/BlackOpacity";
import { Box } from "../components/Box";
import { Icon } from "../components/Icon";
import { City } from "../types";
type CityDetailsHeaderProps = Pick<City, "id" | "coverImage" | "categories">;

export default function CityDetailsHeader({
  coverImage,
  categories,
}: CityDetailsHeaderProps) {
  const { top } = useSafeAreaInsets();
  return (
    <Box>
      <ImageBackground
        source={coverImage}
        style={{ width: "100%", height: 250 }}
        imageStyle={{ borderBottomRightRadius: 40 }}
      >
        <BlackOpacity />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          style={{ paddingTop: top }}
          padding="padding"
        >
          <IconButton iconName="Chevron-left" onPress={router.back} />
          <Icon name="Favorite-outline" size={30} color="pureWhite" />
        </Box>
      </ImageBackground>

      <ScrollView
        style={{ marginTop: -PILL_HEIGHT / 2 }}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        <Box flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill key={category.id} active={true} category={category} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

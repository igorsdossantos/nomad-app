import Divider from "@/src/components/Divider";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { BottomSheetMap } from "@/src/containers/BottomSheetMap";
import CityDetailsHeader from "@/src/containers/CityDetailsHeader";
import CityDetailsInfo from "@/src/containers/CityDetailsInfo";
import CityDetailsMap from "@/src/containers/CityDetailsMap";
import CityDetailsRelatedCities from "@/src/containers/CityDetailsRelatedCities";
import CityDetailsTouristAttactions from "@/src/containers/CityDetailsTouristAttactions";
import { useCityDetails } from "@/src/data/useCityDetails";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function CityDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const city = useCityDetails(id);

  const bottomSheetisOpen = useSharedValue(false);
  function toggleBottomSheet() {
    bottomSheetisOpen.value = !bottomSheetisOpen.value;
  }

  if (!city) {
    return (
      <Screen flex={1} justifyContent="center" alignItems="center">
        <Text>City not found</Text>
      </Screen>
    );
  }

  return (
    <>
      <Screen style={{ paddingHorizontal: 0 }} scrollable>
        <CityDetailsHeader
          id={city.id}
          coverImage={city.coverImage}
          categories={city.categories}
        />
        <CityDetailsInfo
          name={city.name}
          country={city.country}
          description={city.description}
        />

        <Divider paddingHorizontal="padding" />
        <CityDetailsTouristAttactions
          touristAttractions={city.touristAttractions}
        />

        <Divider paddingHorizontal="padding" />

        <Pressable onPress={toggleBottomSheet}>
          <CityDetailsMap location={city.location} />
        </Pressable>

        <Divider paddingHorizontal="padding" />
        <CityDetailsRelatedCities />
      </Screen>
      <BottomSheetMap
        location={city.location}
        isOpen={bottomSheetisOpen}
        onPress={toggleBottomSheet}
      />
    </>
  );
}

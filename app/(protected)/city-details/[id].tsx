import { useLocalSearchParams, useRouter } from "expo-router";

import { Screen } from "@/src/components/Screen";
import CityDetailsHeader from "@/src/containers/CityDetailsHeader";
import CityDetailsInfo from "@/src/containers/CityDetailsInfo";
import CityDetailsMap from "@/src/containers/CityDetailsMap";
import CityDetailsRelatedCities from "@/src/containers/CityDetailsRelatedCities";
import CityDetailsTouristAttactions from "@/src/containers/CityDetailsTouristAttactions";

export default function CityDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <CityDetailsHeader />
      <CityDetailsInfo />
      <CityDetailsMap />
      <CityDetailsTouristAttactions />
      <CityDetailsRelatedCities />
    </Screen>
  );
}

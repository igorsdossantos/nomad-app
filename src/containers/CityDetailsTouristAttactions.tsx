import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";
type Props = Pick<City, "touristAttractions">;

export default function CityDetailsTouristAttactions({
  touristAttractions,
}: Props) {
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s8">
        Pontos turísticos
      </Text>
    </Box>
  );
}

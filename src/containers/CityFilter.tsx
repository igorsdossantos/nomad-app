import { ScrollView } from "react-native";
import { Box } from "../components/Box";
import { CategoryPill } from "../components/CategoryPill";
import { SearchInput } from "../components/SearchInput";
import { Category } from "../types";

type CityFilterProps = {
  categories: Category[];
  cityName: string;
  onChangeCityName: (cityName: string) => void;
  selectedCategoriesId: string | null;
  onChangeSelectedCategoriesId: (id: string | null) => void;
};

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  selectedCategoriesId,
  onChangeSelectedCategoriesId,
}: CityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual seu próximo destino?"
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              active={category.id === selectedCategoriesId}
              category={category}
              onPress={() =>
                onChangeSelectedCategoriesId(
                  category.id === selectedCategoriesId ? null : category.id,
                )
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

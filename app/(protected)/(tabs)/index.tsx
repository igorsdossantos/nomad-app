import { CityCard } from "@/src/components/CityCard";
import { Icon } from "@/src/components/Icon";
import { Screen } from "@/src/components/Screen";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <Icon name="Beach" color="primary" />
      <Icon name="Culture" color="primary" size={50} />
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  );
}

import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function CityDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white" }} onPress={router.back}>
        City Details for {id}
      </Text>
    </View>
  );
}

import { CityPreview } from "../types";
import { supabase } from "./supabase";

const storgeURL = process.env.EXPO_PUBLIC_SUPABASE_STORAGE_URL;

export type CityFilters = {
  name?: string;
  categoryId?: string | null;
};

async function findAll(filters: CityFilters): Promise<CityPreview[]> {
  try {
    const fields = "id,name,country,cover_image";

    let cities;
    if (filters.categoryId) {
      const { data } = await supabase
        .from("cities_with_categories")
        .select(fields)
        .eq("category_id", filters.categoryId)
        .ilike("name", `${filters.name}`);
      cities = data;
    } else {
      const { data } = await supabase
        .from("cities")
        .select("*")
        .ilike("name", `%${filters.name}%`);
      cities = data;
    }

    if (!data) {
      throw new Error("data is not available");
    }

    return data?.map((row) => ({
      id: row.id,
      country: row.country,
      name: row.name,
      coverImage: `${storgeURL}/${row.cover_image}`,
    }));
  } catch (error) {
    throw error;
  }
}

export const supabaseService = { findAll };

import { useEffect, useState } from "react";
import { supabaseService } from "../supabase/supabaseService";
import { City } from "../types";

// export function useCityDetails(id: string) {
//   const city = cities.find((city) => city.id === id);
//   return city;
// }

type UseCitiesDetailsReturn = {
  city?: City;
  isLoading: boolean;
  error: unknown;
};

export function useCityDetails(id: string): UseCitiesDetailsReturn {
  const [city, setCity] = useState<City>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      const cities = await supabaseService.findByID(id);

      setCity(cities);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    city,
    isLoading,
    error,
  };
}

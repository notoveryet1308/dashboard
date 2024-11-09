import { useEffect, useState } from "react";

import { getWeatherData, WeatherDataType } from "../utils/api/weather";
import localStorageService from "../../../utils/localStorage";

type LocationCoordinate = {
  latitude: number;
  longitude: number;
};

const useWeatherApiData = ({ widgetId }: { widgetId: string }) => {
  console.log({ widgetId });

  const [locationCords, setLocationCords] = useState<LocationCoordinate | null>(
    null
  );
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(
    localStorageService.getData(widgetId).data || null
  );
  const [error, setError] = useState<string | null>(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocationCords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (locationCords?.latitude && locationCords?.longitude && !weatherData) {
      getWeatherData({
        lat: locationCords.latitude,
        lon: locationCords.longitude,
      })
        .then((data) => {
          setWeatherData(data);
          localStorageService.setData(widgetId, data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [locationCords, weatherData, widgetId]);

  useEffect(() => {
    getLocation();
  }, []);

  return { weatherData, error };
};

export default useWeatherApiData;

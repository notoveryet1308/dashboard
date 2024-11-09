import CLEAR_SKY from "../../../../assets/clearSky.webp";
import FEW_CLOUDS from "../../../../assets/fewClouds.webp";
import RAIN from "../../../../assets/rain.webp";
import NIGHT_SKY from "../../../../assets/nightSky.webp";
import THUNDER from "../../../../assets/thunder.webp";
import SNOW from "../../../../assets/snow.webp";
import MIST from "../../../../assets/mist.webp";

const weatherApiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const iconBaseUrl = "http://openweathermap.org/img/wn/";
const COUNTRY_CODE = {
  US: "United States",
  CN: "China",
  JP: "Japan",
  DE: "Germany",
  GB: "United Kingdom",
  FR: "France",
  IN: "India",
  IT: "Italy",
  BR: "Brazil",
  CA: "Canada",
};

const BG_IMAGE = {
  "01n": NIGHT_SKY,
  "01d": CLEAR_SKY,
  "02d": FEW_CLOUDS,
  "03d": FEW_CLOUDS,
  "04d": FEW_CLOUDS,
  "09d": RAIN,
  "10d": RAIN,
  "11d": THUNDER,
  "13d": SNOW,
  "50d": MIST,
  "04n": FEW_CLOUDS,
};

export type WeatherDataType = {
  placeName: string;
  description: string;
  country: string;
  iconUrl: string;
  bgImage: string;
  temperature: string;
};

function convertKelvinToCelsius(kelvin: number) {
  return kelvin - 273.15;
}

export const getWeatherData = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<WeatherDataType> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
  );
  const { name, weather, sys, main } = await response.json();

  return {
    placeName: name,
    description: weather[0].description,
    country: COUNTRY_CODE[sys.country as keyof typeof COUNTRY_CODE],
    iconUrl: iconBaseUrl + weather[0].icon + "@2x.png",
    bgImage: BG_IMAGE[weather[0].icon as keyof typeof BG_IMAGE] || CLEAR_SKY,
    temperature: convertKelvinToCelsius(main.temp).toFixed(1),
  };
};

import useWeatherApiData from "../../hooks/useWeatherApiData";
import Loader from "../../Loader";

import { StyledWeatherWidgetWrapper } from "./style";

const Weather = ({ widgetId }: { widgetId: string }) => {
  const { weatherData, error } = useWeatherApiData({ widgetId });

  if (!weatherData && !error) return <Loader />;

  return (
    <StyledWeatherWidgetWrapper $bgImg={weatherData?.bgImage}>
      <div className="bg-image" />
      <div className="weather-information">
        <div className="place-detail">
          <h2 className="place-name">{weatherData?.placeName}</h2>
          <p className="country-name">{weatherData?.country}</p>
        </div>
        <p className="weather-description">{weatherData?.description} </p>
      </div>
      <span className="temp">
        {weatherData?.temperature}
        <sup>°C</sup>
      </span>
    </StyledWeatherWidgetWrapper>
  );
};

export default Weather;

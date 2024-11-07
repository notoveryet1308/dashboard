import News from "./News";
import Stocks from "./Stocks";
import Weather from "./Weather";

export enum WidgetTypes {
  News = "News",
  Stocks = "Stocks",
  Weather = "Weather",
}

const Widgets = {
  [WidgetTypes.News]: News,
  [WidgetTypes.Stocks]: Stocks,
  [WidgetTypes.Weather]: Weather,
};

export default Widgets;

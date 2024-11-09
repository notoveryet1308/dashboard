import News from "./components/News";
import Stocks from "./components/Stocks";
import Weather from "./components/Weather";
import Calendar from "./components/Calendar";

import { WidgetTypes, WidgetActionType } from "./constants";

const Widgets = {
  [WidgetTypes.News]: { Component: News, actions: [WidgetActionType.DELETE] },
  [WidgetTypes.Stocks]: {
    Component: Stocks,
    actions: [WidgetActionType.DELETE],
  },
  [WidgetTypes.Weather]: {
    Component: Weather,
    actions: [WidgetActionType.DELETE],
  },
  [WidgetTypes.Calendar]: {
    Component: Calendar,
    actions: [WidgetActionType.DELETE],
  },
};

export default Widgets;

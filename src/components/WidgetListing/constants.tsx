import { Calendar, ChartLine, CloudMoon, Newspaper } from "phosphor-react";

import { WidgetTypes } from "../Widgets/constants";

type WidgetThumbnailType = {
  type: WidgetTypes;
  label: string;
  icon: JSX.Element;
};

const WIDGET_THUMBNAIL_CONFIG: WidgetThumbnailType[] = [
  {
    type: WidgetTypes.News,
    label: "News",
    icon: <Newspaper size={24} weight="fill" />,
  },
  {
    type: WidgetTypes.Stocks,
    label: "Stocks",
    icon: <ChartLine size={24} weight="fill" />,
  },
  {
    type: WidgetTypes.Weather,
    label: "Weather",
    icon: <CloudMoon size={24} weight="fill" />,
  },
  {
    type: WidgetTypes.Calendar,
    label: "Calendar",
    icon: <Calendar size={24} weight="fill" />,
  },
];

export { WIDGET_THUMBNAIL_CONFIG };

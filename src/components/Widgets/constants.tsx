import { Trash } from "phosphor-react";

export enum WidgetTypes {
  News = "News",
  Stocks = "Stocks",
  Weather = "Weather",
  Calendar = "Calendar",
}

export enum WidgetActionType {
  DELETE = "DELETE",
}

export const WidgetActions = {
  [WidgetActionType.DELETE]: (onClick: () => void) => (
    <Trash size={20} onClick={onClick} key="DELETE" />
  ),
};

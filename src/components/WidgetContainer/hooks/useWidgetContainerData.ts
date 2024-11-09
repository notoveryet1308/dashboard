import { useEffect, useState } from "react";

import { WidgetActionType, WidgetTypes } from "../../Widgets/constants";

import localStorageService from "../../../utils/localStorage";
import useDropData from "./useDropData";

const WIDGET_DATA_KEY = "droppedWidgets";

type DroppedWidgets = {
  widgetType: WidgetTypes;
  id: string;
  isUnique?: boolean;
  dimension?: { height: number; width: number };
}[];

const useWidgetContainerData = () => {
  const [droppedWidgets, setDroppedWidgets] = useState<DroppedWidgets>(
    localStorageService.getData(WIDGET_DATA_KEY).data || []
  );
  const { drop, isOver } = useDropData({ setDroppedWidgets });

  const widgetActionHandlers = {
    [WidgetActionType.DELETE]: (id: string) => () => {
      setDroppedWidgets((prevDroppedWidgets) =>
        prevDroppedWidgets.filter((widget) => widget.id !== id)
      );
      localStorageService.removeData(id);
    },
  };

  const getResizedDimension = ({
    width,
    height,
    id,
  }: {
    width: number;
    height: number;
    id: string;
  }) => {
    setDroppedWidgets((prevDroppedWidgets) =>
      prevDroppedWidgets.map((widget) =>
        widget.id === id ? { ...widget, dimension: { width, height } } : widget
      )
    );
  };

  useEffect(() => {
    // Remove the key if there are no dropped widgets else add
    if (!droppedWidgets.length) localStorageService.removeData(WIDGET_DATA_KEY);
    else localStorageService.setData(WIDGET_DATA_KEY, droppedWidgets);
  }, [droppedWidgets]);

  return {
    getResizedDimension,
    widgetActionHandlers,
    isOver,
    drop,
    droppedWidgets,
  };
};

export default useWidgetContainerData;

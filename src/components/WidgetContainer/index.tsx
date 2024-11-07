import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import Widgets, { WidgetTypes } from "../Widgets";
import ResizableWrapper from "../ResizeableWrapper";

import { StyledWidgetContainerWrapper } from "./style";
import EmptyContainer from "./EmptyContainer";

import localStorageService from "../../utils/localStorage";

const WIDGET_DATA_KEY = "droppedWidgets";

type DroppedWidgets = {
  widgetType: WidgetTypes;
  id: string;
  isUnique?: boolean;
  dimension?: { height: number; width: number };
}[];

const WidgetContainer = () => {
  const [droppedWidgets, setDroppedWidgets] = useState<DroppedWidgets>(localStorageService.getData(WIDGET_DATA_KEY).data || []);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "widgets",
    drop: (droppedItem: { widgetType: WidgetTypes; isUnique?: boolean }) => {
      const updatedDroppedWidgets = (previousData: DroppedWidgets) => [
        ...previousData,
        { ...droppedItem, id: uuidv4() },
      ];
      setDroppedWidgets(updatedDroppedWidgets);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  useEffect(() => {
    localStorageService.setData(WIDGET_DATA_KEY, droppedWidgets);
  }, [droppedWidgets]);

  const getDimension = ({
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

  return (
    <StyledWidgetContainerWrapper $isOver={isOver} ref={drop}>
      {!droppedWidgets.length ? (
        <EmptyContainer />
      ) : (
        <div className="widgets">
          {droppedWidgets.map(({ id, widgetType }) => {
            const WidgetCom = Widgets[widgetType];
            return (
              <ResizableWrapper
                key={id}
                id={id}
                getResizedDimension={getDimension}
              >
                <WidgetCom key={widgetType} />
              </ResizableWrapper>
            );
          })}
        </div>
      )}
    </StyledWidgetContainerWrapper>
  );
};

export default WidgetContainer;

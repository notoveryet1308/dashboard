import { useState } from "react";
import { useDrop } from "react-dnd";

import Widgets, { WidgetTypes } from "../Widgets";

import { StyledWidgetContainerWrapper } from "./style";

type DroppedWidgets = { widgetType: WidgetTypes }[];

const WidgetContainer = () => {
  const [droppedWidgets, setDroppedWidgets] = useState<DroppedWidgets>([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "widgets",
    drop: (droppedItem: { widgetType: WidgetTypes }) => {
      setDroppedWidgets([...droppedWidgets, droppedItem]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <StyledWidgetContainerWrapper $isOver={isOver} ref={drop}>
      {!droppedWidgets.length ? (
        <p>Drop widgets here</p>
      ) : (
        droppedWidgets.map(({ widgetType }) => {
          const WidgetCom = Widgets[widgetType];
          return <WidgetCom key={widgetType} />;
        })
      )}
    </StyledWidgetContainerWrapper>
  );
};

export default WidgetContainer;

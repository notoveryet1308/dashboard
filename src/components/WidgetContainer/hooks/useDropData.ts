import { Dispatch } from "react";

import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import { WidgetTypes } from "../../Widgets/constants";

type DroppedWidgets = {
  widgetType: WidgetTypes;
  id: string;
  isUnique?: boolean;
  dimension?: { height: number; width: number };
}[];

const useDropData = ({
  setDroppedWidgets,
}: {
  setDroppedWidgets: Dispatch<React.SetStateAction<DroppedWidgets>>;
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "widgets",
    drop: (droppedItem: { widgetType: WidgetTypes }) => {
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

  return { isOver, drop };
};

export default useDropData;

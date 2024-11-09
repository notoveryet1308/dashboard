import ResizableWrapper from "../ResizeableWrapper";
import Widgets from "../Widgets";
import { WidgetActions } from "../Widgets/constants";

import EmptyContainer from "./EmptyContainer";
import { StyledWidgetContainerWrapper } from "./style";
import WidgetActionWrapper from "./WidgetActionWrapper";

import useWidgetContainerData from "./hooks/useWidgetContainerData";

const WidgetContainer = () => {
  const {
    isOver,
    drop,
    getResizedDimension,
    droppedWidgets,
    widgetActionHandlers,
  } = useWidgetContainerData();

  return (
    <StyledWidgetContainerWrapper $isOver={isOver} ref={drop}>
      {!droppedWidgets.length ? (
        <EmptyContainer />
      ) : (
        <div className="widgets">
          {droppedWidgets.map(({ id, widgetType, dimension }) => {
            //get the widget component based on widgetType
            const WidgetComponent = Widgets[widgetType].Component;

            //get actions allowed on a widget such as delete, edit etc
            const actions = Widgets[widgetType].actions.map((actionName) => {
              const onClick = widgetActionHandlers[actionName](id);
              //return the action component based on actionName with action handler
              return WidgetActions[actionName](onClick);
            });

            return (
              <WidgetActionWrapper actions={actions} key={id}>
                <ResizableWrapper
                  key={id}
                  id={id}
                  getResizedDimension={getResizedDimension}
                  previousHeight={dimension?.height}
                  previousWidth={dimension?.width}
                >
                  <WidgetComponent key={widgetType} widgetId={id} />
                </ResizableWrapper>
              </WidgetActionWrapper>
            );
          })}
        </div>
      )}
    </StyledWidgetContainerWrapper>
  );
};

export default WidgetContainer;

import { useDrag } from "react-dnd";
import { ReactNode } from "react";

import { WIDGET_THUMBNAIL_CONFIG } from "./constants";
import { StyledThumbnailWrapper } from "./style";

const Thumbnail = ({
  widget,
  label,
  icon,
}: {
  widget: string;
  label: string;
  icon: ReactNode;
}) => {
  const [, drag] = useDrag(() => ({
    type: "widgets",
    item: { widgetType: widget },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <StyledThumbnailWrapper ref={drag}>
      {icon}
      <span className="thumbnail-label">{label}</span>
    </StyledThumbnailWrapper>
  );
};

const WidgetThumbnails = () => (
  <div className="widgets-wrapper">
    {WIDGET_THUMBNAIL_CONFIG.map(({ icon, type, label }) => (
      <Thumbnail key={label} widget={type} label={label} icon={icon} />
    ))}
  </div>
);

export default WidgetThumbnails;

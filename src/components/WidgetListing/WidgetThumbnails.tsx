import { useDrag } from "react-dnd";

const Atom = ({ widget, label }: { widget: string; label: string }) => {
  const [, drag] = useDrag(() => ({
    type: "widgets",
    item: { widgetType: widget },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log({ item, dropResult });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        width: "50px",
        height: "50px",
        background: "blue",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {label}
    </div>
  );
};

const WidgetThumbnails = () => (
  <div className="widgets-wrapper">
    <Atom label="W1" widget="News" />
    <Atom label="W2" widget="Stocks" />
    <Atom label="W3" widget="Weather" />
  </div>
);

export default WidgetThumbnails;

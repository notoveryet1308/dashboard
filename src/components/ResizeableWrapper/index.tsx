import { ReactNode, useRef, useEffect } from "react";

import { StyledResizableWrapper } from "./style";

type Dimension = { height: number; width: number; id: string };

const ResizableWrapper = ({
  id,
  children,
  getResizedDimension,
}: {
  id: string;
  children: ReactNode;
  getResizedDimension: (data: Dimension) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeObserver: ResizeObserver;
    const element = ref?.current;
    if (element) {
      resizeObserver = new ResizeObserver(() => {
        const { height, width } = element.getBoundingClientRect();
        getResizedDimension({ height, width, id });
      });
      resizeObserver.observe(element);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return <StyledResizableWrapper ref={ref}>{children}</StyledResizableWrapper>;
};

export default ResizableWrapper;

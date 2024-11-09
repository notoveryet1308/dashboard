import { ReactNode } from "react";
import { StyledWidgetACtionWrapper } from "./style";

const WidgetActionWrapper = ({
  children,
  actions,
}: {
  children: ReactNode;
  actions?: ReactNode;
}) => {
  return (
    <StyledWidgetACtionWrapper>
      {children}
      <div className="widget-action">{actions} </div>
    </StyledWidgetACtionWrapper>
  );
};

export default WidgetActionWrapper;

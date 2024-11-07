import { Binoculars } from "phosphor-react";
import { StyledEmptyContainerWrapper } from "./style";

const EmptyContainer = () => (
  <StyledEmptyContainerWrapper>
    <div className="empty-content-wrapper">
      <Binoculars size={40} weight="fill" className="empty-icon" />
      <p className="empty-content-title">Drop widgets here</p>
    </div>
  </StyledEmptyContainerWrapper>
);

export default EmptyContainer;

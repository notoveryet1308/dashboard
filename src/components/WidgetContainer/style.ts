import styled from "styled-components";

export const StyledWidgetContainerWrapper = styled.div<{ $isOver: boolean }>`
  flex: 1;
  margin: 16px 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 8px;
  border: 2px dashed transparent;
  border-color: ${({ $isOver }) =>
    $isOver ? "var(--brand-color)" : "transparent"};
  border-radius: 8px;
`;

import styled from "styled-components";

export const StyledWidgetContainerWrapper = styled.div<{ $isOver: boolean }>`
  padding: 24px;
  flex: 1;
  border: 2px dashed transparent;
  border-color: ${({ $isOver }) =>
    $isOver ? "var(--brand-color)" : "transparent"};
  border-radius: 8px;
  overflow: auto;

  .widgets {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 24px;
    padding: 24px 0 16px 0;
  }
`;

export const StyledEmptyContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: var(--background-secondary-color);
  border: 2px dashed var(--border-secondary-color);
  border-radius: 8px;
  height: 100%;

  .empty-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .empty-icon {
      color: var(--brand-color);
    }

    .empty-content-title {
      font-size: 16px;
      color: var(--text-secondary-color);
    }
  }
`;

export const StyledWidgetACtionWrapper = styled.div`
  position: relative;

  .widget-action {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    background-color: var(--background-secondary-color);
    border: 1px solid var(--border-secondary-color);
    border-radius: 0 8px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  &:hover .widget-action {
    opacity: 1;
    border-color: var(--brand-color);
  }
`;

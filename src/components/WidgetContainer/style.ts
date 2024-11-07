import styled from "styled-components";

export const StyledWidgetContainerWrapper = styled.div<{ $isOver: boolean }>`
  margin: 16px 24px;
  display: flex;
  flex: 1;
  padding: 8px;
  border: 2px dashed transparent;
  border-color: ${({ $isOver }) =>
    $isOver ? "var(--brand-color)" : "transparent"};
  border-radius: 8px;

  .widgets {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
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

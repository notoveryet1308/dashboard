import styled, { css } from "styled-components";

const onExpand = () => css`
  transform: translateX(0);
  opacity: 1;

  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export const StyledWidgetListingWrapper = styled.div<{ $isExpanded: boolean }>`
  position: relative;
  border-right: 1px solid var(--container-border);
  width: ${({ $isExpanded }) => ($isExpanded ? "240px" : "60px")};

  transition: width 0.3s ease-in-out;

  .widget-listing-trigger {
    top: 16px;
    left: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: var(--brand-color);
  }

  .widget-listing-container {
    gap: 16px;
    opacity: 0;
    width: 240px;
    height: 100%;
    display: flex;
    transition: none;
    flex-direction: column;
    transition-delay: 0.1s;
    background-color: inherit;
    transform: translateX(-100%);

    ${({ $isExpanded }) => $isExpanded && onExpand()}

    .widget-listing-header {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-bottom: 1px solid var(--container-border);
      padding: 16px 24px;

      .widget-listing-collapse-btn {
        position: absolute;
        top: 12px;
        right: -14px;
        color: var(--brand-color);
        cursor: pointer;
      }
    }

    .widget-listing-title {
      font-size: 16px;
      font-weight: 500;
    }

    .widgets-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 24px;
    }
  }
`;

export const StyledThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--brand-secondary-color);
  padding: 6px 12px;
  border-radius: 8px;
  cursor: move;
  border: 1px solid transparent;

  .thumbnail-label {
    font-size: 14px;
  }

  &:hover {
    border-color: var(--brand-color);
  }
`;

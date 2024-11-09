import styled from "styled-components";

export const StyledResizableWrapper = styled.div<{
  $height?: number;
  $width?: number;
}>`
  padding: 4px;
  resize: both;
  overflow: auto;
  min-width: 200px;
  min-height: 200px;
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--border-secondary-color);
  background-color: var(--background-secondary-color);
  width: ${({ $width }) => ($width ? `${$width}px` : "max-content")};
  height: ${({ $height }) => ($height ? `${$height}px` : "max-content")};

  &:hover {
    border-color: var(--brand-color);
  }
`;

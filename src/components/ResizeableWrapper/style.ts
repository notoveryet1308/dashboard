import styled from "styled-components";

export const StyledResizableWrapper = styled.div`
  border: 1px solid var(--border-secondary-color);
  padding: 4px;
  resize: both;
  overflow: auto;
  border-radius: 8px;
  background-color: var(--background-secondary-color);
  height: max-content;

  &:hover {
    border-color: var(--brand-color);
  }
`;

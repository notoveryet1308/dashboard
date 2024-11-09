import styled from "styled-components";

export const StyledWidgetLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading-circle {
    width: 40px;
    height: 40px;
    border: 5px solid var(--brand-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

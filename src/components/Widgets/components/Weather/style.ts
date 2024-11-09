import styled from "styled-components";

export const StyledWeatherWidgetWrapper = styled.div<{ $bgImg?: string }>`
  height: 100%;
  padding: 4px;
  border-radius: 4px;
  position: relative;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${({ $bgImg }) => $bgImg});
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.8;
    border-radius: 4px;
  }

  .weather-information {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    padding: 8px;

    .weather-description {
      background-color: var(--brand-color);
      padding: 4px 8px;
      border-radius: 20px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
    }
  }

  .temp {
    position: absolute;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    z-index: 2;
    bottom: 12px;
    right: 20px;
  }
`;

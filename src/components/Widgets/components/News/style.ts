import styled from "styled-components";

export const StyledNewsWidget = styled.a<{ $bgImg?: string }>`
  position: relative;
  padding: 4px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  color: #fff;
  display: flex;

  .news-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ $bgImg }) => `url(${$bgImg})`};
    background-position: center;
    background-size: cover;
    border-radius: 4px;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #000;
      opacity: 0.7;
    }
  }

  .news-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 16px;
    z-index: 2;
    flex: 1;
    align-items: flex-start;
    padding: 16px;

    .news-top {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .news-source {
      background-color: var(--brand-secondary-color);
      padding: 8px 16px;
      border-radius: 20px;
    }
  }
`;

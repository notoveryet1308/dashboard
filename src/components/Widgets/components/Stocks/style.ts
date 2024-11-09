import styled from "styled-components";

export const StyledStockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .stock-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;

    .stock-head-info {
      display: flex;
      column-gap: 8px;
      align-items: center;

      .stock-img {
        width: 32px;
        height: 32px;
        border-radius: 4px;
      }

      .stock-name {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;

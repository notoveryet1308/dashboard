import Dropdown from "../../../ui/Dropdown";
import { StyledStockWrapper } from "./style";

import STOCK_DATA from "./data";
import useStockData from "../../hooks/useStockData";
import TimeSeriesChart from "./TimeseriesChart";

const Stocks = ({ widgetId }: { widgetId: string }) => {
  const { stockSymbol, menu } = useStockData({ widgetId });

  const { title, icon, data } = STOCK_DATA[stockSymbol];

  return (
    <StyledStockWrapper>
      <div className="stock-head">
        <div className="stock-head-info">
          <img src={icon} alt={title} className="stock-img" />
          <h3 className="stock-name">{title}</h3>
        </div>
        <Dropdown menu={menu} label="Select Stock" />
      </div>
      <TimeSeriesChart data={data} />
    </StyledStockWrapper>
  );
};

export default Stocks;

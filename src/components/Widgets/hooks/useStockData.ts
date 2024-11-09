import { useEffect, useState } from "react";
import type { MenuProps } from "antd";

import { STOCK_SYMBOLS } from "../components/Stocks/type";
import localStorageService from "../../../utils/localStorage";

const stockOption: MenuProps["items"] = [
  {
    label: "Apple",
    key: STOCK_SYMBOLS.APPLE,
  },
  {
    label: "IBM",
    key: STOCK_SYMBOLS.IBM,
  },
];

const useStockData = ({ widgetId }: { widgetId: string }) => {
  const symbol =
    localStorageService.getData(widgetId).data || STOCK_SYMBOLS.APPLE;
  const [stockSymbol, setStockSymbol] = useState<STOCK_SYMBOLS>(symbol);

  const onStockChange: MenuProps["onClick"] = (data) => {
    setStockSymbol(() => data.key as STOCK_SYMBOLS);
    localStorageService.setData(widgetId, data.key);
  };

  const menu = {
    items: stockOption,
    onClick: onStockChange,
  };

  return { onStockChange, stockSymbol, menu };
};

export default useStockData;

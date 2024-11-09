export enum STOCK_SYMBOLS {
  "IBM" = "IBM",
  "APPLE" = "AAPL",
}

export type LINE_SERIES_DATA_TYPE = {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type LINE_STOCK_TYPE = {
  title: string;
  icon: string;
  data: LINE_SERIES_DATA_TYPE[];
};

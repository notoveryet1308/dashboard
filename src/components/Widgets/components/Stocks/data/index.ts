import { IBM_STOCK_DATA_DAILY } from "./ibm";
import { APPLE_STOCK_DATA_DAILY } from "./apple";

import { STOCK_SYMBOLS } from "../type";

 const STOCK_DATA = {
  [STOCK_SYMBOLS.IBM]: IBM_STOCK_DATA_DAILY,
  [STOCK_SYMBOLS.APPLE]: APPLE_STOCK_DATA_DAILY,
};

export default STOCK_DATA;
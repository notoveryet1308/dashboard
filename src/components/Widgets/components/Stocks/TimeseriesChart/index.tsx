import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { LINE_SERIES_DATA_TYPE } from "../type";

const TimeSeriesChart = ({ data }: { data: LINE_SERIES_DATA_TYPE[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        // width={600}
        // height={400}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="#8884d8" />
        <Line type="monotone" dataKey="close" stroke="#82ca9d" />
        <Line type="monotone" dataKey="high" stroke="#ffc658" />
        <Line type="monotone" dataKey="low" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSeriesChart;

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ReactCalendar from "react-calendar";

import { StyledCalendarWrapper } from "./style";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  console.log({ value });

  return (
    <StyledCalendarWrapper>
      <ReactCalendar onChange={onChange} value={value} />
    </StyledCalendarWrapper>
  );
};

export default Calendar;

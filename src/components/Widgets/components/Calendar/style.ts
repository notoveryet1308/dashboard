import styled from "styled-components";

export const StyledCalendarWrapper = styled.div`
  .react-calendar {
    width: 100%;
    border: none;
    background-color: var(--background-color);

    .react-calendar__navigation__arrow,
    .react-calendar__navigation__label,
    .react-calendar__tile {
      color: #fff;
      border-radius: 40px;
      &:hover {
        background-color: var(--background-tertiary-color);
      }
    }

    .react-calendar__tile {
      border-radius: 40px;
    }

    .react-calendar__month-view__days__day--weekend {
      color: var(--danger-color);
    }

    .react-calendar__tile--active {
      background-color: var(--brand-secondary-color);
    }
  }
`;

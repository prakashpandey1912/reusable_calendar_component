import { getDaysInAMonth, getWeekDayOfMonth } from "../../utils/dateHelper";
import { NUMBEROFDAYS, MAXNUMBEROFROWS } from "../../constants/local";
import CalendarRow from "./calenderRow";

interface iPropsDays {
  currentDate: Date;
  month: number;
  year: number;
}
const CalenderGrid = ({ currentDate, month, year }: iPropsDays) => {
  const daysInAMonth = getDaysInAMonth(month, year);
  const startDayOfMonth = getWeekDayOfMonth(month, year);
  const rows = [...Array(MAXNUMBEROFROWS)].map((_, rowIndex) => {
    const days = [...Array(NUMBEROFDAYS)].map((_, colIndex) => {
      const day = rowIndex * NUMBEROFDAYS + colIndex + 1 - startDayOfMonth;
      return day <= 0 || day > daysInAMonth ? null : day;
    });
    return days === null ? (
      ""
    ) : (
      <CalendarRow key={rowIndex} days={days} currentDate={currentDate} />
    );
  });

  return <> {rows} </>;
};

export default CalenderGrid;

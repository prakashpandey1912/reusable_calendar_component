import {
  getCurrentMonth,
  getCurrentMonthName,
  getCurrentYear
} from "../../utils/dateHelper";
import WeekNames from "./weekNames";
import CalenderGrid from "./calenderGrid";
import CalenderHeading from "./heading";

interface iProps {
  date: Date;
}

const Calender = (props: iProps) => {
  const month = getCurrentMonth(props.date);
  const monthName = getCurrentMonthName(props.date);
  const year = getCurrentYear(props.date);

  return (
    <div className="container">
      <div className="calender">
        <CalenderHeading monthName={monthName} year={year} />
        <WeekNames />
        <CalenderGrid month={month} year={year} currentDate={props.date} />
      </div>
    </div>
  );
};

export default Calender;

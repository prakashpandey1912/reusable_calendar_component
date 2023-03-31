import { WEEKSDATA } from "../../constants/local";

const WeekNames = () => {
  return (
    <div className="weeks">
      {WEEKSDATA.map((week, index) => {
        return (
          <div key={index} className="days">
            {week}
          </div>
        );
      })}
    </div>
  );
};

export default WeekNames;

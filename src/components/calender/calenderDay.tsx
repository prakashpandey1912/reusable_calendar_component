interface iCalenderDayProps {
  day: number | null;
  isToday: boolean;
}
export default function CalenderDay({ day, isToday }: iCalenderDayProps) {
  return (
    <span className={`dayDate ${isToday ? "currentDate" : ""}`}>
      {day === null || day <= 0 ? "" : day}
    </span>
  );
}

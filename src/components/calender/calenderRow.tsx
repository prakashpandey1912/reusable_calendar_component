import CalenderDay from "./calenderDay";

interface iCalenderDay {
  days: Array<number | null>;
  currentDate: Date;
}
export default function CalendarRow({ days, currentDate }: iCalenderDay) {
  return (
    <div className="row" style={{ display: "flex" }}>
      {days?.map((day: number | null, index: number) => {
        const isToday = day === currentDate.getDate();
        return <CalenderDay key={index} day={day} isToday={isToday} />;
      })}
    </div>
  );
}

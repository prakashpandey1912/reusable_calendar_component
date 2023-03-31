interface iHeadingProps {
  monthName: string;
  year: number;
}

const CalenderHeading = ({ monthName, year }: iHeadingProps) => (
  <div>{`${monthName} ${year}`}</div>
);

export default CalenderHeading;

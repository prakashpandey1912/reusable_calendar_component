import { render, screen } from "@testing-library/react";
import Calender from "../components/calender";
import "@testing-library/jest-dom";
import WeekNames from "../components/calender/weekNames";
import { getCurrentMonthName } from "../utils/dateHelper";
describe("Calender Component", () => {
  const testDate = new Date();

  test("Calender", () => {
    const { container } = render(<Calender date={testDate} />);
    expect(container.getElementsByClassName("container").length).toBe(1);
  });

  test("WeekNames", () => {
    const { container } = render(<WeekNames />);
    expect(container.getElementsByClassName("weeks").length).toBe(1);
  });
});

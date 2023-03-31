import { MONTHSDATA } from "../constants/local";

export const getCurrentMonth = (currentDate: Date) => {
  return currentDate?.getMonth();
};

export const getCurrentMonthName = (currentDate: Date) => {
  return MONTHSDATA[getCurrentMonth(currentDate)];
};

export const getCurrentYear = (currentDate: Date) => {
  return currentDate?.getFullYear();
};

export const getDaysInAMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getWeekDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

export const getMonthString = (date) => {
  return date.toISOString().slice(0, 7);
};

export const subtractMonths = (date, months) => {
  const month = (date.getMonth() + 12 - months) % 12;

  date.setMonth(month);

  return date;
};

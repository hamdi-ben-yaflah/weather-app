export const formatDay = (unix: number) => {
  const date = new Date(unix * 1000);
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
  return isToday
    ? "Today"
    : date.toLocaleDateString(undefined, { weekday: "long" });
};

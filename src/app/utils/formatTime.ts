export const formatTime = (unix: number) => {
  return new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(unix * 1000));
};

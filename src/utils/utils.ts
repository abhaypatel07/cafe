export function formatDate(dateString: string | number | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const dateObj = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObj,
  );

  const endTime = new Date(dateObj.getTime() + 60 * 60 * 1000);
  const formattedEndTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(endTime);

  return `${formattedDate} - ${formattedEndTime}`;
}

function cn(...args: any[]) {
  return args
    .map((arg) => {
      if (typeof arg === "string") return arg;
      if (typeof arg === "object") {
        return Object.keys(arg)
          .filter((key) => arg[key])
          .join(" ");
      }
    })
    .filter(Boolean)
    .join(" ");
}

const getBaseUrl = (context: any): string => {
  const { req } = context;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const baseUrl = `${protocol}://${host}`;
  return baseUrl;
};
export { cn, getBaseUrl };

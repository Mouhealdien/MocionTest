// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export function convertTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(":").map(Number); // Split the time and convert to numbers
  const period = hours >= 12 ? "PM" : "AM"; // Determine AM/PM
  const hours12 = hours % 12 || 12; // Convert to 12-hour format
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
}

// Example usage
const time24 = "16:35";
const time12 = convertTo12HourFormat(time24);
console.log(time12); // Output: "4:35 PM"

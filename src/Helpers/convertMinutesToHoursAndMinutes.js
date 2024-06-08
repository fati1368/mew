export default function convertMinToHoursAndMin(minute) {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;
  return `${hours}h ${minutes}m`;
}

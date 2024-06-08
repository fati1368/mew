export default function formatNumberToAccounting(revenue) {
  if (typeof revenue !== "number") {
    return "Invalid input";
  }
  const numString = revenue.toString();
  const [integerPart, decimalPart] = numString.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
  return formattedNumber;
}

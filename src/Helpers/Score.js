export default function UserScore(rate) {
  const userScore = typeof rate === "number" ? Math.round(rate * 10) : "";

  return userScore
}

export default function convertToStars(rating) {
  console.log(rating);
  if (rating.vote_average < 0 || rating.vote_average > 10) {
    return alert("invalid");
  }
  const starRating = Math.round((rating.vote_average / 2) * 2) / 2;

  return starRating;
}

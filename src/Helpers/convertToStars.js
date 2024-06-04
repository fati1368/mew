export default function convertToStars(rating) {
    if (rating < 0 || rating > 10) {
      return alert ("invalid");
    }
    const starRating = Math.round((rating / 2) * 2) / 2;
    return starRating;
  }

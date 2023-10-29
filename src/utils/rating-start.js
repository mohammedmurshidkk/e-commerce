import { FaStar } from "react-icons/fa";

function renderRatingStars(rate) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i <= rate ? "text-warning" : "text-secondary"}
      />
    );
  }
  return stars;
}

export default renderRatingStars;

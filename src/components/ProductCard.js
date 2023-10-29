import renderRatingStars from "@/utils/rating-start";
import Link from "next/link";

function ProductCard(props) {
  const product = props.product;

  return (
    <div key={product.id} className="col mb-4">
      <Link style={{ textDecoration: "none" }} href={`/products/${product.id}`}>
        <div className="card h-100 shadow">
          <div className="aspect-ratio-box">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
          </div>
          <div className="card-body" style={{}}>
            <h6 className="card-title">{product.title}</h6>
            <div className="">
              <p className="card-text" style={{ fontSize: "17px" }}>
                ₹ {product.price}
              </p>
              <div className="d-flex align-items-center">
                <p className="mb-0 me-2">Rating:</p>
                {renderRatingStars(product.rating.rate)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

"use client";
import { fetchProductDetail } from "@/services/apiServices";
import renderRatingStars from "@/utils/rating-start";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProductDetail() {
  const router = useParams();
  const { id } = router;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (id) {
        try {
          const product = await fetchProductDetail(id);
          setProduct(product);
        } catch (error) {
          console.error("Error fetching product details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex d-flex vh-100 vw-100 justify-content-center align-items-center ">
        <div class="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            width={300}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 mt-5">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <div className="mb-3">
            <small className="text-muted">
              Rating: {renderRatingStars(product?.rating?.rate)} (
              {product?.rating?.count} reviews)
            </small>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

"use client";

import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { fetchProductByCategory } from "@/services/apiServices";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

async function Category() {
  const router = useParams();
  const { category } = router;

  const products = await fetchProductByCategory(category);

  return (
    <div className="container pt-4">
      <div className="d-flex align-items-center mb-4">
        <Link href="/products" className="text-primary">
          <FaArrowLeft />
        </Link>
        &nbsp;&nbsp;
        <h5 className="m-0">{decodeURIComponent(category.toUpperCase())}</h5>
      </div>
      {products && products?.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products?.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
}

export default Category;

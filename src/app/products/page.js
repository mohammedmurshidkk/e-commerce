import { fetchProducts } from "@/services/apiServices";
import ProductCard from "@/components/ProductCard";

async function Products() {
  
  const products = await fetchProducts();

  return (
    <div className="container pt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}

export default Products;

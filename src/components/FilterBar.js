import Link from "next/link";
import { fetchProductCategories } from "../services/apiServices";

async function FilterBar() {
  const productCategories = await fetchProductCategories();

  return (
    <div className="d-flex align-items-center mb-3">
      <h6 className="m-0">Categories: </h6>
      {productCategories?.map((category) => (
        <Link href={`category/${category}`}>
          <div className="m-2 small-font-size">{category?.toUpperCase()}</div>
        </Link>
      ))}
    </div>
  );
}

export default FilterBar;

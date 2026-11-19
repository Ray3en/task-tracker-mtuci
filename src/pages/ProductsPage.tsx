import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  fetchProduct,
  fetchProducts,
  type ApiProduct,
} from "../api/product.api";

function ProductsPage() {
  const [products, setProducts] = useState<ApiProduct[]>([]);

  async function loadProduct() {
    const data = await fetchProducts();
    setProducts(data);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <li>{product.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;

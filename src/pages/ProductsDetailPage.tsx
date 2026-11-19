import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProduct, type ApiProduct } from "../api/product.api";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ApiProduct | null>(null);

  async function loadProduct() {
    if (!id) return;

    const data = await fetchProduct(id);
    setProduct(data);
  }

  useEffect(() => {
    loadProduct();
  }, [id]);

  if (!product) return <p>Загрузка...</p>;
  return(
    <div>
         <h1>{product.title}</h1>
         <img src={product.thumbnail}/>
    </div>
  );
}

export default ProductDetailPage
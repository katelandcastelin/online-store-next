import { useRouter } from 'next/router';
import ProductDetails from '../components/ProductDetails';
import corsetProducts from '../corsetsProducts-data/corsetsProducts';

export default function CorsetDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const selectedProduct = corsetProducts.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Product not found.</div>
  }

  return <ProductDetails product={selectedProduct} />
}

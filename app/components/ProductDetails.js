

export default function ProductDetails({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.description} />
      <p>R {product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

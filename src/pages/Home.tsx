import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../utils/currency";
import { useProduct } from "../hooks/useProduct";

export default function Home() {
  const { addToCart } = useCart();
  const { products, loading } = useProduct();

  return (
    <div>
      <Container>
        <h1 className="text-center py-5 text-3xl font-bold">Our Products</h1>
        <div className="h-[2px] opacity-50 bg-black mb-10"></div>
        {loading ? (
          "loading"
        ) : (
          <div className="flex flex-wrap justify-between gap-x-1 gap-y-10">
            {products?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="w-3/12 border-2 p-5 border-black rounded-md border-opacity-40"
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="aspect-square object-contain"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                  <div className="text-center m-2 space-y-2">
                    <h1 className="font-medium text-xl">
                      {product.title.slice(0, 20) + "..."}
                    </h1>
                    <p className="font-bold text-2xl">
                      {formatMoney(product.price)}
                    </p>
                    <button
                      className="rounded-md py-2 text-white bg-black px-6"
                      onClick={() => addToCart(product, product.id)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

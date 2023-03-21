import { useParams } from "react-router";
import Container from "../components/Container";
import { formatMoney } from "../utils/currency";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products, loading } = useProduct();

  const detailProduct = products?.find((item) => item.id === Number(id));

  return (
    <div>
      <Container>
        {loading ? (
          "loading"
        ) : (
          <div className="flex gap-5">
            <div className="w-1/2">
              <img
                className="w-4/6"
                src={detailProduct?.image}
                alt={detailProduct?.title}
              />
            </div>
            <div className="w-1/2 space-y-5">
              <h1 className="uppercase font-bold text-2xl opacity-75">
                - {detailProduct?.category}
              </h1>
              <h1 className="text-6xl font-medium">{detailProduct?.title}</h1>
              <p className="text-3xl">Rating {detailProduct?.rating.rate} ★</p>
              <p className="text-4xl font-bold">
                {formatMoney(detailProduct?.price)}
              </p>
              <p className="text-xl">{detailProduct?.description}</p>
              <button
                onClick={() => addToCart(detailProduct, detailProduct?.id)}
                className="rounded-md py-2 text-white bg-black px-6"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

import { useParams } from "react-router";
import Container from "../components/Container";
import { formatMoney } from "../utils/currency";
import { useProduct } from "../hooks/useProduct";

export default function Product() {
  const { id } = useParams();
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
              <img src={detailProduct?.images[0]} alt={detailProduct?.title} />
            </div>
            <div className="w-1/2 space-y-5">
              <h1 className="text-3xl font-medium">{detailProduct?.title}</h1>
              <p className="text-4xl font-bold">
                {formatMoney(detailProduct?.price)}
              </p>
              <p className="text-xl">{detailProduct?.description}</p>
              <button className="rounded-md py-2 text-white bg-black px-6">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

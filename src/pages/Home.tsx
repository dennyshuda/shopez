import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import { ProductType } from "../types";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../utils/currency";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const { addToCart } = useCart();

  async function getAllProducts() {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=21"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-center py-5 text-3xl font-bold">Our Products</h1>
        {loading ? (
          "loading"
        ) : (
          <div className="flex flex-wrap justify-between gap-x-5 gap-y-10">
            {products?.map((product) => {
              return (
                <div key={product.id} className="w-3/12">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt="" />
                  </Link>
                  <div className="text-center">
                    <h1 className="font-bold">{product.title}</h1>
                    <p>{formatMoney(product.price)}</p>
                    <button onClick={() => addToCart(product, product.id)}>
                      Add
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

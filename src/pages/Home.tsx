import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import { ProductType } from "../types";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getAllProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
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
                  <img
                    className="aspect-square"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="text-center">
                    <h1 className="font-bold">{product.title}</h1>
                    <p>${product.price}</p>
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

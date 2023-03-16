import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductType } from "../types";
import Container from "../components/Container";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getAllProducts() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [id]);
  return (
    <div>
      <Container>
        {loading ? (
          "loading"
        ) : (
          <div className="flex">
            <div className="w-1/2">
              <img src={product?.image} alt="" />
            </div>
            <div className="w-1/2">
              <h1 className="text-3xl">{product?.title}</h1>
              <p>{product?.description}</p>
              <p>${product?.price}</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

import { useEffect, useState } from "react";
import { ProductType } from "../types";
import axios from "axios";

export function useProduct() {
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

  return { products, loading };
}

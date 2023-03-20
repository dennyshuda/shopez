import { ReactNode, createContext, useContext, useState } from "react";
import { ProductType } from "../types";

interface Children {
  children: ReactNode;
}

interface CartContextType {
  addToCart(product: ProductType, id: number): void;
}

const CartContext = createContext({} as CartContextType);

export function useCart() {
  return useContext(CartContext);
}

export default function CartContextProvider({ children }: Children) {
  const [cart, setCart] = useState<ProductType[]>([]);

  function addToCart(product: ProductType, id: number) {
    const newProductCart = { ...product, amount: 1 };
    const cartProduct = cart.find((product) => product.id === id);
    if (cartProduct) {
      const newCart = [...cart].map((product) => {
        if (product.id === id) {
          return { ...product, amount: cartProduct.amount + 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newProductCart]);
    }
  }
  console.log(cart);

  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

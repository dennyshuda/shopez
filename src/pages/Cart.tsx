import Container from "../components/Container";
import { useCart } from "../context/CartContext";
import { formatMoney } from "../utils/currency";

export default function Cart() {
  const { cart, total, increaseAmount, removeFromCart, decreaseAmount } =
    useCart();
  console.log(cart);
  return (
    <div>
      <Container>
        {cart.length <= 0
          ? "Cart is empty"
          : cart.map((product) => {
              return (
                <>
                  <div className="flex gap-5 item items-center mb-10">
                    <div className="w-4/12">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="w-4/12">
                      <h1>{product.title}</h1>
                      <p>{formatMoney(product.price)}</p>
                      <div className="border-2 text-center inline-block">
                        <span
                          onClick={() => decreaseAmount(product.id)}
                          className="hover:cursor-pointer w-10 inline-block px-2 py-1"
                        >
                          -
                        </span>
                        <span className="w-10 inline-block px-2 py-1">
                          {product.amount}
                        </span>
                        <span
                          onClick={() => increaseAmount(product.id)}
                          className="hover:cursor-pointer w-10 inline-block px-2 py-1"
                        >
                          +
                        </span>
                      </div>
                      <button onClick={() => removeFromCart(product.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="w-4/12">
                      {formatMoney(product.amount * product.price)}
                    </div>
                  </div>
                </>
              );
            })}
        <div>
          <span>Total: {formatMoney(total)}</span>
        </div>
      </Container>
    </div>
  );
}

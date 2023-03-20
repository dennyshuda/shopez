import Container from "../components/Container";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, total, increaseAmount, removeFromCart, decreaseAmount } =
    useCart();
  console.log(cart);
  return (
    <div>
      <Container>
        {cart.map((product) => {
          return (
            <div className="flex gap-5 item items-center mb-10">
              <div className="w-4/12">
                <img src={product.images[0]} alt={product.title} />
              </div>
              <div className="w-4/12">
                <h1>{product.title}</h1>
                <p>${product.price}</p>
                <div className="border-2 text-center inline-block">
                  <span
                    onClick={() => decreaseAmount(product.id)}
                    className="w-10 inline-block px-2 py-1"
                  >
                    -
                  </span>
                  <span className="w-10 inline-block px-2 py-1">
                    {product.amount}
                  </span>
                  <span
                    onClick={() => increaseAmount(product.id)}
                    className="w-10 inline-block px-2 py-1"
                  >
                    +
                  </span>
                </div>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
              <div className="w-4/12">${product.amount * product.price}</div>
            </div>
          );
        })}
        <div>
          <span>Total: ${total}</span>
        </div>
      </Container>
    </div>
  );
}

export function formatMoney(price: number | undefined) {
  return price?.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

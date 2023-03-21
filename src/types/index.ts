export interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
  description: number;
  amount: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

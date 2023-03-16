export interface ProductType {
  id: number;
  category: string;
  title: string;
  image: string;
  price: number;
  description: number;
  rating: {
    rate: number;
    count: number;
  };
}

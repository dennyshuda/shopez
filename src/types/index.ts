export interface ProductType {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: number;
  creationAt: string;
  updatedAt: string;
  amount: number;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

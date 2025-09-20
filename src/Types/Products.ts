enum Category { 'Men','Women','Travel' }

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  category: Category;
  stockQuantity: number;
  imageUrl: string;
};
export type { Product };
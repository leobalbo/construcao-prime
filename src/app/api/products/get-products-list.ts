import data from '@/app/api/products/data.json'
import { Product } from '@/types/product'

export function getProductsList(category: string): Product[] {
  const products = data.products

  if (category) {
    return products.filter((product) => product.category.includes(category))
  }

  return products
}

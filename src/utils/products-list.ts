export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  badge: string
}

export const productList: Product[] = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Esta é a descrição do produto 1',
    price: 9999999,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria A',
    badge: 'Novo',
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Esta é a descrição do produto 2',
    price: 999999,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria B',
    badge: 'Promoção',
  },
  {
    id: 3,
    name: 'Produto 3',
    description: 'Esta é a descrição do produto 3',
    price: 99999,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria A',
    badge: '',
  },
  {
    id: 4,
    name: 'Produto 4',
    description: 'Esta é a descrição do produto 4',
    price: 9999,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria C',
    badge: '',
  },
  {
    id: 5,
    name: 'Produto 5',
    description: 'Esta é a descrição do produto 5',
    price: 999,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria B',
    badge: '',
  },
  {
    id: 6,
    name: 'Produto 6',
    description: 'Esta é a descrição do produto 6',
    price: 99,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria A',
    badge: '',
  },
  {
    id: 7,
    name: 'Produto 7',
    description: 'Esta é a descrição do produto 7',
    price: 9,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria C',
    badge: '',
  },
  {
    id: 8,
    name: 'Produto 8',
    description: 'Esta é a descrição do produto 8',
    price: 10,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria B',
    badge: '',
  },
  {
    id: 9,
    name: 'Produto 9',
    description: 'Esta é a descrição do produto 9',
    price: 10,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria A',
    badge: '',
  },
  {
    id: 10,
    name: 'Produto 10',
    description: 'Esta é a descrição do produto 10',
    price: 10,
    image: 'https://generated.vusercontent.net/placeholder.svg',
    category: 'Categoria C',
    badge: '',
  },
]

export function getProductsList(category: string): Product[] {
  if (category) {
    return productList.filter((product) => product.category.includes(category))
  }

  return productList
}

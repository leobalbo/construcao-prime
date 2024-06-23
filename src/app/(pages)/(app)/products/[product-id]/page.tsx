'use client'
import { Button } from '@/components/shadcn/button'
import { Label } from '@/components/shadcn/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/select'
import { Product, productList } from '@/utils/products-list'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const defaultProduct = {
  id: 999999999999999,
  name: 'Produto não encontrado',
  description: 'Produto não encontrado',
  price: 0,
  image: 'https://generated.vusercontent.net/placeholder.svg',
  category: '',
  badge: '',
}

export default function ProductPage() {
  const params = useParams<{ 'product-id': string }>()
  const productId = params['product-id']

  const product: Product =
    productList.find((p) => p.id === parseInt(productId)) || defaultProduct

  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
      <div className="grid items-start gap-4 md:gap-10">
        <Image
          src={product?.image}
          alt="Product Image"
          width={600}
          height={600}
          className="aspect-square w-full overflow-hidden rounded-lg border object-cover"
        />
      </div>
      <div className="grid items-start gap-4 md:gap-10">
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold lg:text-4xl">{product?.name}</h1>

          <div>
            <p>{product?.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">
              {' '}
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </div>
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantia
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg" className="bg-[#111] text-white hover:bg-[#333]">
            Adicionar ao carrinho
          </Button>
        </form>
      </div>
    </div>
  )
}

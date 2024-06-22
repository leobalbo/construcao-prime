'use client'
import { Badge } from '@/components/shadcn/badge'
import { Button } from '@/components/shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { ArrowUp, Filter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { getProductsList } from './products-list'

const getBadgeClass = (badge: string) => {
  const defaultClass = 'absolute left-4 top-4 py-1'
  switch (badge) {
    case 'Novo':
      return `${defaultClass} bg-green-500`
    case 'Promoção':
      return `${defaultClass} bg-red-500`
    default:
      return `${defaultClass} bg-green-500`
  }
}

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const products = getProductsList()

  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  )

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex w-full flex-row-reverse">
      <section className="w-full py-12">
        <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">
                Nossos Produtos
              </h1>
              <p className="text-muted-foreground"></p>
            </div>
            <div className="flex items-center gap-4 md:ml-auto">
              <Button variant="outline" className="shrink-0">
                Carrinho (0)
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="shrink-0">
                    <Filter className="mr-2 h-4 w-4" />
                    {selectedCategory === 'All' ? 'Todos' : selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  <DropdownMenuItem
                    onSelect={() => setSelectedCategory('All')}
                    className={
                      selectedCategory === 'All'
                        ? 'bg-accent text-accent-foreground'
                        : ''
                    }
                  >
                    Todos
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onSelect={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? 'bg-accent text-accent-foreground'
                          : ''
                      }
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative grid gap-4 overflow-hidden rounded-lg border"
              >
                {/* {product.badge && (
                  <Badge className={getBadgeClass(product.badge)}>
                    {product.badge}
                  </Badge>
                )} */}
                <div className="group relative">
                  <Link
                    href="#"
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="aspect-square w-full object-cover transition-opacity group-hover:opacity-50"
                  />
                  {product.badge && (
                    <Badge className={getBadgeClass(product.badge)}>
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="grid gap-2 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{product.name}</h3>
                    <h4 className="font-semibold">
                      {product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 bg-background shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-6 w-6" />
          <span className="sr-only">Voltar ao Topo</span>
        </Button>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { ReactElement } from 'react'

interface NotFoundProps {
  title: string
  href: string
  description: string
  buttonText: string
  icon: ReactElement
}

export default function NotFoundTemplate(props: NotFoundProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        {props.icon}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {props.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{props.description}</p>
        <div className="mt-6">
          <Link
            href={props.href}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}

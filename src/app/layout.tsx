import { HeaderComponent } from '@/components/header/header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Construção Prime',
  description: 'Construção Prime',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderComponent />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

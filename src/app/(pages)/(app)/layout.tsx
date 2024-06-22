import { HeaderComponent } from '@/components/header/header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  )
}

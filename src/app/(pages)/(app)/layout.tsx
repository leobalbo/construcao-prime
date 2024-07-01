import Transition from '@/components/utils/transition'
import { Header } from './header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Transition>{children}</Transition>
    </>
  )
}

import { FC, PropsWithChildren } from 'react'
import { Container } from './Container'
import LayoutFooter from './Footer'
import LayoutHeader from './Header'

interface LayoutProps {
  pageTitle?: string
  pageDesc?: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => (
  <>
    <LayoutHeader />
    <Container tag="main" className="flex-1">
      {children}
    </Container>
    <LayoutFooter />
  </>
)

export default Layout

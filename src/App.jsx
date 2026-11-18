import { Container, Navbar, Row, Col } from 'react-bootstrap'
import CartIcon from './components/CartIcon.jsx'
import ProductList from './components/ProductList.jsx'
import ShoppingCart from './components/ShoppingCart.jsx'
import { products } from './data/products.js'

export default function App() {
  return (
    <div className="bg-body-tertiary min-vh-100">
      <Navbar bg="white" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand as="h1" className="m-0 fw-bold text-primary">
            SampleShop
          </Navbar.Brand>
          <CartIcon />
        </Container>
      </Navbar>

      <Container as="main" className="pb-5">
        <Row className="g-4">
          <Col lg={8} xl={9}>
            <ProductList products={products} />
          </Col>
          <Col lg={4} xl={3}>
            <ShoppingCart />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

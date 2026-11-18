import { useState } from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice.js'
import cartIcon from '../assets/cart.svg'

const MAX_RATING = 5
const MAX_QUANTITY = 99

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  // Выбранное количество нужно только этой карточке, поэтому хранится локально
  const [quantity, setQuantity] = useState(1)

  const rating = Math.round(product.rating)
  const clamp = (value) => Math.min(MAX_QUANTITY, Math.max(1, value))

  const handleAdd = () => {
    dispatch(addToCart(product, quantity))
    setQuantity(1)
  }

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h6">
          {product.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-body-secondary">{product.category}</Card.Subtitle>

        <div className="text-warning mb-2" aria-label={`Рейтинг ${product.rating} из ${MAX_RATING}`}>
          {'★'.repeat(rating)}
          <span className="text-black-50">{'★'.repeat(MAX_RATING - rating)}</span>
        </div>

        <p className="fs-4 fw-bold mb-3">${product.price.toFixed(2)}</p>

        <div className="mt-auto">
          <InputGroup className="mb-3">
            <Button
              variant="outline-secondary"
              aria-label="Уменьшить количество"
              disabled={quantity <= 1}
              onClick={() => setQuantity(clamp(quantity - 1))}
            >
              −
            </Button>
            <Form.Control
              type="number"
              min={1}
              max={MAX_QUANTITY}
              value={quantity}
              aria-label="Количество"
              className="text-center"
              onChange={(event) => setQuantity(clamp(Number(event.target.value) || 1))}
            />
            <Button
              variant="outline-secondary"
              aria-label="Увеличить количество"
              disabled={quantity >= MAX_QUANTITY}
              onClick={() => setQuantity(clamp(quantity + 1))}
            >
              +
            </Button>
          </InputGroup>

          <Button variant="primary" className="w-100" onClick={handleAdd}>
            <img src={cartIcon} alt="" width={20} height={20} className="me-2" style={{ filter: "brightness(0) invert(1)" }} />
            Добавить в корзину
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

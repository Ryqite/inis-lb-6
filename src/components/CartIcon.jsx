import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice.js'
import cartIcon from '../assets/cart.svg'

export default function CartIcon() {
  const cartCount = useSelector(selectCartCount)

  return (
    <div className="position-relative">
      <img src={cartIcon} alt="Корзина" width={32} height={32} />
      {cartCount > 0 && (
        <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
          {cartCount}
        </Badge>
      )}
    </div>
  )
}

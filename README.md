# SampleShop — React + Redux Toolkit + React Bootstrap (ЛР №23, вариант 3)

Интернет-магазин цифровых товаров. Интерфейс из ЛР №22 переведён на React Bootstrap: кнопки, карточки,
селектор количества (`InputGroup`), список корзины и сетка каталога (`Container`, `Row`, `Col`) —
готовые компоненты библиотеки. Состояние корзины по-прежнему хранится в Redux Toolkit.

## Запуск

Требуется Node.js 20+.

```bash
npm install
npm run dev
```

Сборка: `npm run build`.

## Структура

```
src/
  store/                   cartSlice.js, index.js (Redux Toolkit)
  components/
    ProductCard.jsx        Card, Button, InputGroup, Form.Control
    ProductList.jsx        Form.Control, Row, Col, Alert
    ShoppingCart.jsx       Card, ListGroup, Button
    CartIcon.jsx           Badge
  App.jsx                  Navbar, Container, Row, Col
  main.jsx                 подключение bootstrap.min.css и <Provider>
```

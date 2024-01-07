import { Button, Card } from "react-bootstrap"

const ProductCard = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={product.photo} />
        <Card.Body>
          <Card.Title>
            {product.name}
          </Card.Title>
          <Button variant='primary'>Show Details</Button>
        </Card.Body>
      </Card>
    )
}

export default ProductCard

// <Button onClick={revealClick} />
import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../types/data';

export default function HomePage() {
    return (
        <Row>
            {sampleProducts.map((product) => (
                <Col key={product.slug} sm={6} md={3} lg={4} >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                    />
                    <h2>{product.name}</h2>
                    <p>$ {product.price}</p>
                </Col>
            ))}
        </Row>
    )
}

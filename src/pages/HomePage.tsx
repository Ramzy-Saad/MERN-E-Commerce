import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../types/data';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

type State = {
    products: Product[],
    loading: boolean,
    error: string
}

type Action =
    { type: 'FETCH_REQUEST' }
{
    type: 'FETCH_SUCCESS'
    payload: Product[]
}
{
    type: 'FETCH_FAIL'
    payload: string
}
export default function HomePage() {
    return (
        <Row>
            {sampleProducts.map((product) => (
                <Col key={product.slug} sm={6} md={3} lg={4} >
                    <Link to={"product/" + product.slug}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <h2>{product.name}</h2>
                        <p>$ {product.price}</p>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}

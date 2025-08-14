import { Button, Card, CardTitle } from "react-bootstrap";
import type { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductItem({ product }: { product: Product }) {
    return <Card>
        <Link to={`/product/${product.slug}`}>
            <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
            />
        </Link>
        <Card.Body>
            <Link to={`/product/${product.slug}`}>
                <CardTitle>{product.name}</CardTitle>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            <Card.Text>${product.price}</Card.Text>
            {product.countInStock === 0 ? (
                <Button variant="light" disabled>
                    Out Of Stock
                </Button>
            ) : (
                <Button>Add To Cart</Button>
            )}
        </Card.Body>
    </Card>
}
export default ProductItem
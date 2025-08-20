import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import type { ApiError } from '../types/ApiError';
import { getError } from '../utils';
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    refetch,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {getError(error as  ApiError)}
    </MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img className="large" src={product?.image} alt={product?.name}></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product?.name}</title>
              </Helmet>
              <h1>{product?.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product?.rating ?? 0}
                numReviews={product?.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: {product?.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
          <Card.Body>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product?.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock>0?(
                    <Badge bg='success'> In Stock</Badge>
                  ):(
                    <Badge bg='danger'> Out of Stock</Badge>
                  )}</Col>
                </Row>
              </ListGroup.Item>
              {product?.countInStock>0 &&(
                <ListGroup.Item>
                  <div className='d-grid'>
                    <Button variant='primary'> Add To cart</Button>
                  </div>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
          </Card></Col>
      </Row>
    </div>
  );
}

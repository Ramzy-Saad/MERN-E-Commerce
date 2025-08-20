import { Col, Row } from 'react-bootstrap';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';
import { useGetProductsQuery } from '../hooks/productHooks';
import { getError } from '../utils';
import type { ApiError } from '../types/ApiError';

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as unknown as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Ramzy EC</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={3} lg={4}>
          <ProductItem product={product}></ProductItem>
        </Col>
      ))}
    </Row>
  );
}

import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = ({item}) => {
  console.log(item)
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    // 쿼리값에 q에 매칭되는 값이 있다면 그 값을 찾아오고, 아닐시 빈 문자열 반환
    const searchQuery = query.get("q") || "";
    const url = `http://localhost:3000/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
        <Col key={index} lg={3}>
        <ProductCard item={menu} />
        </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductAll
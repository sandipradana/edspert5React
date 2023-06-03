import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../store/product/action";
import {  Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { entities } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchProducts = async () => {
    dispatch(getProducts());
  };
  const goToDetail = (productId) => {
    navigate(`/detail/${productId}`)
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container style={{ marginTop: "32px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {entities.map((item) => {
          return (
            <Card onClick={() => goToDetail(item.id)} key={item.id} style={{ width: "18rem", cursor: 'pointer' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p>$ {item.price}</p>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default ProductPage;

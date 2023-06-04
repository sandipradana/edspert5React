import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/product/action";
import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { addItem } from "../../store/cart/slice";

const DetailPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);
  console.log('entity', entity)

  const fetchProduct = async (productId) => {
    await dispatch(getProduct(productId))
  }

  useEffect(() => {
    fetchProduct(id);
  }, [])

  return <Container style={{marginTop: '32px'}}>
    <Row>
      <Col md={{span: 4, offset: 2}}>
      <Image style={{width: '100%', height: '100%', objectFit: 'contain'}} src={entity.image} />
      </Col>
      <Col md={4}>
        <h3>{entity.title}</h3>
        <p>{entity.description}</p>
        <h5>$ {entity.price}</h5>
        <Button variant="success" onClick={() => dispatch(addItem(entity))}>Add to cart</Button>
      </Col>
    </Row>
  </Container>;
};

export default DetailPage;

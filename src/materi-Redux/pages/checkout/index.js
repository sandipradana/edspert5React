import { useSelector } from "react-redux";
import { Col, Container, Row, Table } from "react-bootstrap";

const CheckoutPage = () => {
  const { entities } = useSelector((state) => state.cart);

  const countTotalPrice = (data) => {
    const result = data.reduce((prev, curr) => {
      return prev + parseInt(curr.price, 10);
    }, 0);
    return result;
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Ringkasan Pesanan Anda</h1>
          <p>Terima kasih atas pesanan anda</p>
          <p> Berikut adalah product yang anda masukkan ke keranjang:</p>

          <Table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((item) => {
                return (
                  <tr>
                    <td>{item.title}</td>
                    <td> $ {item.price}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>$ {countTotalPrice(entities)},00</td>
              </tr>
            </tfoot>
          </Table>

          <h5>Metode pembayaran</h5>
          <p>
            Silahkan melakukan pembayaran ke rekening ABC a/n Joko 123 dengan
            nomor rekening 1234 5678 9876 5431
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;

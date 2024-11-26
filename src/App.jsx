import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomAlert from "./components/CustomAlert";
import CustomNavbar from "./components/CustomNavbar";
import fantasy from "./data/fantasy.json";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./components/CustomFooter";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CustomAlert />
      <Container>
        <Row>
          {fantasy.map((product) => {
            return (
              <Col xs={12} md={3} key={product.asin}>
                <Card className="mb-5 bg-body-secondary">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}$</Card.Text>
                    <Button variant="danger">Aggiungi al carrello</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

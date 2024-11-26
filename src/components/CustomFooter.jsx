import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-4">
        <Row>
          {}
          <Col md={12} className="text-center mb-4">
            <p>Grazie per aver visitato la nostra pagina</p>
          </Col>

          {}
          <Col md={12} className="text-center mb-4">
            <Button variant="outline-light" size="lg">
              Iscriviti alla newsletter
            </Button>
          </Col>

          {}
          <Col md={12} className="text-center">
            <p>&copy; 2024 EpiBook.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

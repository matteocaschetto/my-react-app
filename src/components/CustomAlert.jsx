import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Welcome = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleExploreClick = () => {
    setShowAlert(false);
  };

  return (
    <Container className="my-5">
      {}
      {showAlert && (
        <Alert variant="secondary">
          <Alert.Heading>Benvenuto nel nostro Shop!</Alert.Heading>
          <p>
            Grazie per essere con noi. Scopri il nostro vasto assortimento di
            prodotti e approfitta delle migliori offerte.
          </p>
          <Button variant="secondary" onClick={handleExploreClick}>
            Esplora il nostro shop
          </Button>
        </Alert>
      )}

      {}
      {!showAlert && (
        <h2 className="text-center text-black">
          Esplora ora e trova i tuoi prodotti preferiti!
        </h2>
      )}
    </Container>
  );
};

export default Welcome;

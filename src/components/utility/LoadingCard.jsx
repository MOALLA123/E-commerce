import React from "react";
import { Card, Placeholder, Col, Row } from "react-bootstrap";
let x = 0;
const LoadingCard = () => {
  return (
    <Row>
      <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button
              variant="primary"
              xs={6}
              className="btn btn-secondary"
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoadingCard;

import React from "react";
import { Button, Card } from "react-bootstrap";
import Home from "../HomePage";
import photo from "../../images/brand1.png";
import { CompactPicker } from "react-color";
import Transitions from "../../transation";
const AdminSetting = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Card style={{ width: "18rem", margin: "auto" }}>
            <Card.Body>
              <Card.Title>لون الخلفية الرئسي</Card.Title>
              <CompactPicker />
            </Card.Body>
          </Card>
        </div>
        <Card
          style={{
            width: "18rem",
            margin: "auto",
          }}
        >
          <Card.Body>
            <Card.Title>لون الخلفية الرئسي</Card.Title>
            <CompactPicker />
          </Card.Body>
        </Card>
      </div>{" "}
    </>
  );
};
export default AdminSetting;

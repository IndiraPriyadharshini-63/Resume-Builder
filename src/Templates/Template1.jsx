import React from "react";
import { CardImg } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import TemplateImg1 from "../assets/templates/download.png";

function Template1(props) {
  return (
    <>
      <Card style={{ width: "18rem", position: "relative" }}>
        <CardImg variant="top" src={TemplateImg1} />

        <Button
          variant="primary"
          style={{ position: "absolute", top: "150px", left: "75px" }}
        >
          Use Template
        </Button>
      </Card>
    </>
  );
}

export default Template1;

import { Container } from "@mui/material";
import React from "react";

function TemplateSkills(props) {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
}

export default TemplateSkills;

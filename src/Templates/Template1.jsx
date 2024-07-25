import React from "react";
import { Container, Paper } from "@mui/material";
import { data } from "../Data/Data";
import TemplateHeader from "../components/TemplateHeader";
import TemplateHeading from "../components/TemplateHeading";
import TemplateExperience from "../components/TemplateExperience";
import TemplateEducation from "../components/TemplateEducation";
import "../Templates/Template1.css";
import TemplateSkills from "../components/TemplateSkills";
function Template1(props) {
  return (
    <>
      <Paper
        sx={{
          height: {
            xs: "500px",
            sm: "550px",
            md: "600px",
            lg: "650px",
            xl: "700px",
          },
          width: {
            xs: "350px",
            sm: "400px",
            md: "450px",
            lg: "500px",
            xl: "550px",
          },
        }}
        elevation={3}
        id="1"
      >
        <TemplateHeader
          primaryColor={"#C98A55"}
          secondaryColor={"black"}
          bgColor={"white"}
        />
        <Container>
          <TemplateHeading />
          <TemplateExperience />
          <TemplateHeading />
          <TemplateEducation />
          <TemplateHeading />
          <TemplateSkills />
        </Container>
      </Paper>
    </>
  );
}

export default Template1;

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image1 from "../assets/resume-image-1.jpg";
import Image2 from "../assets/resume-image-2.jpg";
import Image3 from "../assets/resume-image-3.jpg";
import Footer from "./Footer";
import "./Home.css";
import TemplateImages from "./templateImages/TemplateImages";



function Home() { 
  return (
    <>
      <div className="home-container d-flex flex-row justify-content-between">
        <div className="section-1 ">
          <img
            className="resume-image resume-image-1"
            src={Image1}
            alt="template1"
          />
          <img
            className="resume-image resume-image-2"
            src={Image2}
            alt="template2"
          />
          <img
            className="resume-image resume-image-3"
            src={Image3}
            alt="template3"
          />
        </div>
        <div className="section-1-contents p-5">
          <h2>Create your Resume Now</h2>
          <span className="mt-5 mb-5">
            Save time with our easy 3-step resume builder. No more writer’s
            block or formatting difficulties in Word. Rapidly make a perfect
            resume employers love.
          </span>
          <Link to="/create-resume">
            <Button size="lg" variant="primary" className="create-btn ">
              Create New resume
            </Button>
          </Link>
        </div>
      </div>

      {/* <div className="template-list">
        <div className="home-templates-count">
          <h3 className="template-header-title">Templates</h3>
          <p className="template-select-text">
            Select a template to get started
          </p>
          <Stack
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                sm: "1fr 1fr ",
                md: "1fr 1fr ",
                lg: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              },
              gridGap: "40px",
            }}
          >
            {templates.map((template) => {
              return (
                <div
                  key={template.id}
                  id="template"
                  className="templates-img-cont"
                >
                  <img
                    className="template-img"
                    src={template.template_img}
                    alt={template.template_name}
                  />
                  <DarkEffect />
                  <Button
                    className="use-template-btn"
                    size="medium"
                    variant="primary"
                    onClick={() => navigateToFill(template.id)}
                  >
                    Use Template
                  </Button>
                </div>
              );
            })}
          </Stack>
        </div>
      </div> */}
      

      <TemplateImages />
      

      <Footer />
    </>
  );
}

export default Home;

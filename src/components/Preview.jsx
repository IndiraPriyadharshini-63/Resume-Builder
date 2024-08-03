import React, { cloneElement, useState } from "react";
import { Button, CircularProgress, Container, TextField } from "@mui/material";
import { connect } from "react-redux";
import { templates } from "../Data/Templates";
import JsPDF from "jspdf";
import uniqid from "uniqid";
import Modal from "./Modal";
import "./styles/Preview.css"

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExpReducer.experiences,
  educationInfo: state.EducationInfo.educationInfo,
  skills: state.SkillReducer.skills,
});

const mapDispatchToProps = (dispatch) => ({});

const Preview = (props) => {
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");

  const getTemplate = (template, index) => {
    if (template.id === props.selectedTemplateId) {
      const TemplateComp = React.cloneElement(template.template, {
        personalInfo: props.personalInfo,
        experiences: props.experiences,
        educationInfo: props.educationInfo,
        skills: props.skills,
        index: index,
        key: template.id,
      });
      return TemplateComp;
    }
  };

  const handleSave = () => {
    if (resumeName.length === 0) {
      setError("*Please fill this field");
    } else {
      console.log("inside else");
      setError("");
      setLoading(true);
      const report = new JsPDF("portrait", "pt", "a4");
      report
        .html(document.getElementById(`${props.selectedTemplateId - 1}report`))
        .then(() => {
          // console.log(`${resumeName} saved `);
          report.save(`${resumeName}.pdf`);
          setLoading(false);

          let resumes = window.localStorage.getItem("resumes");

          if (resumes) {
          } else {
            window.localStorage.setItem(
              "resumes",
              JSON.stringify([
                {
                  template_id: props.selectedTemplateId,
                  id: uniqid(),
                  personalInfo: props.personalInfo,
                  experiences: props.experiences,
                  educationInfo: props.educationInfo,
                  skills: props.skills,
                },
              ])
            );
          }
          window.location.reload();
        })
        .catch((error) => console.log(error.message));
    }
  };

  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  const openModal = async () => {
    setModal(true);

    setTimeout(() => {
      setModal(false);
    }, 2000);
  };

  const bgBlur = () => {
    const blur = document.getElementById("main");
    blur.classList.toggle("active");
  };

  return (
    <>
      <Container
        id="main"
        sx={{
          padding: {
            xs: "40px 20px",
            md: "60px 80px",
          },
        }}
        className="preview-container"
      >
        <h2 className="preview-header-title">Resume Preview</h2>
        <div className="resume-preview-grid-container">
          <div className="resume-preview-grid-item" id="previewresume">
            {templates.map((template, index) => {
              return getTemplate(template, index);
            })}
          </div>

          <div className="resume-preview-grid-item">
            <div className="resume-save-container">
              <h3 className="resume-save-title">Create File Name</h3>
              <TextField
                value={resumeName}
                onChange={(e) => setResumeName(e.target.value)}
                className="resume-name-field"
                sx={{ width: "70%" }}
                id="outlined-basic"
                variant="outlined"
                error={error.length > 0 ? true : false}
                helperText={error}
              />
              <div className="resume-back-next-container">
                <Button
                  onClick={handleBack}
                  className="outlined-btn"
                  sx={{ marginRight: "20px" }}
                  variant="outlined"
                >
                  Back
                </Button>
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <Button
                    onClick={() => {
                      openModal();
                      bgBlur();
                      handleSave();
                    }}
                    className="contained-btn"
                    variant="contained"
                  >
                    Save
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      {modal === true ? <Modal /> : null}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);

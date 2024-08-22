import { Call, LinkedIn, Mail, Room } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React from "react";
import { data } from "../Data/Data";
import "../Templates/styles/Template4.css";

function Template4(props) {
  console.log(props);

  const personalInfo = props.personalInfo
    ? props.personalInfo
    : data.personal_info;

  const skills = props.skills ? props.skills : data.key_skills;

  const educationInfo = props.educationInfo
    ? props.educationInfo
    : data.education_details;

  const experiences = props.experiences
    ? props.experiences
    : data.work_experience;
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
          display:"flex",
          flexDirection:"column", padding:"10px",
        }}
        elevation={3}
        id={`${props.index}report`}
      >
        <div className="top">
          <p className="name">{personalInfo.firstName + personalInfo.lastName}</p>
          <p className="name">Software Engineer</p>
        </div>
        <hr />
        <div className="center">
          <div className="centerCall">
            <Call />
            <span className="centerMobileNumber">{personalInfo.mobile}</span>
          </div>
          <div className="centerMail">
            <Mail />
            <span className="centerMail">{personalInfo.email}</span>
          </div>
          <div className="centerLocation">
            <Room />
            <span className="centerLocation">{personalInfo.city}</span>
          </div>
          <div className="centerLinkedIn">
            <LinkedIn />
            <span className="centerLinkedIn">linkedIn/chandal</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="bottomLeft">
            <div className="skills"></div>
            <div className="education"></div>
            <div className="achievements"></div>
          </div>
          <div className="bottomRight">
            <h1>Work Experience</h1>
            <div className="experience">
              <h3>position</h3>
              <h5>Location</h5>
              <div className="experienceLists">
                <ul className="experienceList">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default Template4;

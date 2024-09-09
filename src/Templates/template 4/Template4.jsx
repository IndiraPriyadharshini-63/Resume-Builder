import { Paper } from "@mui/material";
import React from "react";
import { data } from "../../Data/Data";

import TemplateHeading from "../../components/TemplateHeading";
import TemplateSkills from "../../components/TemplateSkills";

import "./Template4.css";

function Template4(props) {
  console.log(props);

  // const personalInfo = props.personalInfo
  //   ? props.personalInfo
  //   : data.personal_info;

  const skills = props.skills ? props.skills : data.key_skills;

  // const educationInfo = props.educationInfo
  //   ? props.educationInfo
  //   : data.education_details;

  // const experiences = props.experiences
  //   ? props.experiences
  //   : data.work_experience;

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
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
        elevation={3}
        id={`${props.index}report`}
      >
        {/* <div className="top">
          <p className="name">
            {personalInfo.firstName + personalInfo.lastName}
          </p>
          <p className="name">Software Engineer</p>
        </div>
        <hr />
        
        <TemplateContact color={"#B1A963"} personalInfo={personalInfo} />
        <hr />
        <div className="bottom">
          <div className="bottomLeft">
            <div className="skills"></div>
            <div className="education"></div>
            <div className="achievements"></div>
          </div>
          <div className="bottomRight">
            <TemplateHeading color={"#B1A963"} title={"Work Experience"} />
            <ul>
              {experiences.map((exp, index) => (
                <TemplateExperience key={index} experiences={exp} />
              ))}
            </ul>

            <TemplateHeading color={"#B1A963"} title={"Education"} />
            <TemplateEducation education={educationInfo} />
            <TemplateHeading color={"#C98A55"} title={"Key Skills"} />
            <ul style={{ marginBottom: 10 }}>
              {skills.map((skill, index) => {
                return <TemplateSkills key={index} skill={skill} />;
              })}
            </ul>
          </div>
        </div> */}
        <div className="top">
          <span className="name"></span>
          <span className="designation"></span>
        </div>
        <div className="center">
          <div className="mobile"></div>
          <div className="mail"></div>
          <div className="location"></div>
          <div className="linkedIn"></div>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <div className="skills">
              <TemplateHeading color={"#B1A963"} title={"Skills"} />
              <ul>
                {skills.map((skill, index) => (
                  <TemplateSkills key={index} skill={skill} />
                ))}
              </ul>
            </div>
            <div className="education"></div>
            <div className="achievements"></div>
          </div>
          <div className="bottomRight"></div>
        </div>
      </Paper>
    </>
  );
}

export default Template4;

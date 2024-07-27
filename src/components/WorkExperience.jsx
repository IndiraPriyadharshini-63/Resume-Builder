import React, { useState } from "react";
import { connect } from "react-redux";
import { ADDEXPERIENCE, ADDEXPERIENCEALL } from "../Redux/Actions";
import { Controller, useForm } from "react-hook-form";
import { Button, Divider, MenuItem, Paper, Select } from "@mui/material";
import BackNextBtn from "./BackNextBtn";
import SelectComp from "./SelectComp";
import InputComp from "./InputComp";

const mapStateToProps = (state) => ({
  experiences: state.workExpReducer.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  setADDEXPERIENCE: (experience) => dispatch(ADDEXPERIENCE(experience)),
  setADDEXPERIENCEALL: (experiences) => dispatch(ADDEXPERIENCEALL(experiences)),
});

const Years = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
];
function WorkExperience(props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  // Back Click Function
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };

  // Next Click Function
  const handleNext = (data) => {
    // console.log(data);
    setLoading(true);

    let experienceOne = {};
    let experienceTwo = {};

    for (let index in data) {
      if (index.includes("1")) {
        experienceOne[index.slice(0, index.length - 1)] = data[index];
      } else {
        experienceTwo[index.slice(0, index.length - 1)] = data[index];
      }
    }

    if (Object.keys(experienceTwo).length) {
      props.setADDEXPERIENCEALL([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
      ]);
    } else {
      props.setADDEXPERIENCEALL([{ ...experienceOne, id: 1 }]);
    }

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  //  For adding new Experience
  const addNewExperience = () => {
    props.setADDEXPERIENCE({
      id: props.experiences.length + 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    });
  };

  // For adding Job Title
  const editJobTitleExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, jobTitle: value };
      } else return experience;
    });

    props.setADDEXPERIENCEALL(newExperiences);
  };

  //  For Editing the Organizaton Name
  const editOrganisationNameExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, organizationName: value };
      } else return experience;
    });
    props.setADDEXPERIENCEALL(newExperiences);
  };
  return (
    <Paper className="work-experience-paper" elevation={3}>
      <h2 className="workExperienceHeading">Work Experience</h2>
      <form onSubmit={handleSubmit(handleNext)}></form>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);

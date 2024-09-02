import { Paper, Divider, Button } from "@mui/material";
import React, { useState } from "react";
import InputComp from "../input/InputComp";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { ADDNEWSKILLS, EDITSKILL, DELETESKILL } from "../../Redux/Actions";
import { connect } from "react-redux";
import "./KeySkills.css";
import BackNextBtn from "../backNextBtn/BackNextBtn";

const mapStateToProps = (state) => ({
  skills: state.SkillReducer.skills,
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(ADDNEWSKILLS()),
  onEditSkill: (skills) => dispatch(EDITSKILL(skills)),
  onDeleteSkill: (index) => dispatch(DELETESKILL(index)),
});

function KeySkills(props) {
  // console.log(props);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePreview = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };
  const handleBack = () => {
    props.setTab(props.tab - 1);
  };
  const onEditSkill = (value, id) => {
    const newSkill = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });

    props.onEditSkill(newSkill);
  };

  return (
    <Paper className="keySkillPaper" elevation={3}>
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        <div className="key-skills-form-fields">
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                <InputComp
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlined
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>

        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}
          >
            Add new
          </Button>
        )}
        <Divider className="key-skills-divider" />
        <BackNextBtn
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeySkills);

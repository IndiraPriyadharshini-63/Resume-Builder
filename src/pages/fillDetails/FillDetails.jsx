import React, { useState } from "react";
import "./FillDetails.css";
import FillDetailsSidebar from "../../components/FillDetailsSidebar";
import PersonalInfo from "../../components/personalInfo/PersonalInfo";
import WorkExperience from "../../components/workExperience/WorkExperience";
import Education from "../../components/education/Education";
import KeySkills from "../../components/skills/KeySkills";
import Preview from "../../components/preview/Preview";

function FillDetails(props) {
  const [tab, setTab] = useState(0);
  return (
    <div className="fillDetails">
      {tab === 4 ? null : (
        <div className="details-filling">
          <FillDetailsSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? <PersonalInfo tab={tab} setTab={setTab} /> : null}
          {tab === 1 ? <WorkExperience tab={tab} setTab={setTab} /> : null}
          {tab === 2 ? <Education tab={tab} setTab={setTab} /> : null}
          {tab === 3 ? <KeySkills tab={tab} setTab={setTab} /> : null}
        </div>
      )}
      {tab === 4 ? <Preview Tab={tab} setTab={setTab} /> : null}
    </div>
  );
}

export default FillDetails;

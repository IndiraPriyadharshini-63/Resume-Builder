import React, { useState } from "react";
import "./styles/FillDetails.css";
import FillDetailsSidebar from "../components/FillDetailsSidebar";
import PersonalInfo from "../components/PersonalInfo";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import KeySkills from "../components/KeySkills";

function FillDetails(props) {
  const [tab, setTab] = useState(0);
  return (
    <div className="fillDetails">
      {tab === 4 ? null : (
        <div className="details-filling">
          <FillDetailsSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? <PersonalInfo tab={tab} setTab={setTab} /> : null}
          {tab === 1 ? <WorkExperience tab={tab} setTab={setTab} /> : null}
          {tab === 2 ? <Education tab={tab} setTab={setTab} />: null}
          {tab === 3 ? <KeySkills tab={tab} setTab={setTab}/> : null}
        </div>
      )}
    </div>
  );
}

export default FillDetails;

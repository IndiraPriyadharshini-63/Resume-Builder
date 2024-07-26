import React, { useState } from "react";
import "./styles/FillDetails.css";
import FillDetailsSidebar from "../components/FillDetailsSidebar";
import PersonalInfo from "../components/PersonalInfo";


function FillDetails(props) {
  const [tab, setTab] = useState(0);
  return (
    <div className="fillDetails">
      {tab === 4 ? null : (
        <div className="details-filling">
          <FillDetailsSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? <PersonalInfo tab={tab} setTab={setTab} /> : null}
        </div>
      )}
    </div>
  );
}

export default FillDetails;

import "./templateContact.css"
import { Call, LinkedIn, Mail, Room } from "@mui/icons-material";
import { data } from '../../Data/Data';


function TemplateContact(props) {
      
      const personalInfo = props.personalInfo
      ? props.personalInfo
      : data.personal_info;
  return (
    <>
      <div className="center">
          <div className="centerCall">
            <Call  sx={{color:props.color}}/>
            <span className="centerMobileNumber">{personalInfo.mobile}</span>
          </div>
          <div className="centerMail">
            <Mail sx={{color:props.color}}/>
            <span className="centerMail">{personalInfo.email}</span>
          </div>
          <div className="centerLocation">
            <Room sx={{color:props.color}}/>
            <span className="centerLocation">{personalInfo.city}</span>
          </div>
          {/* <div className="centerLinkedIn">
            <LinkedIn sx={{color:props.color}}/>
            <span className="centerLinkedIn">{personalInfo.linkedIn}</span>
          </div> */}
        </div>
    </>
  )
}

export default TemplateContact

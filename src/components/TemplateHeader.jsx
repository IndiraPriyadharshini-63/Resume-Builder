import React from 'react'
import "../components/styles/TemplateHeader.css"
import Img from "../assets/airbnb-logo.png"
function TemplateHeader(props) {
  console.log(props)
  return (
    <>
     <div style={{ backgroundColor: props.bgColor }} >
     <div className="template-header">
      <div className='template-header-first'>
        <div className='template-image-comp' style={{backgroundColor:props.secondaryColor}}>
          <img src={Img} className='template-profile-img'/>
        </div>
      </div>
     </div>
     
     </div>
    </>
  )
}

export default TemplateHeader

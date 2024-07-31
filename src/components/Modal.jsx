import React from "react";
import "./styles/Modal.css";

function Modal(props) {
  //     console.log(props);
  return (
    <div className="Modal" id="Modal">
      <div className="modalContainer">
        <div className="success-image">
          <img
            src="https://i.pinimg.com/originals/13/f6/bc/13f6bc8a60da4da9513e7a1f5fc57955.png"
            alt="success"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="modal-text">
          <p>Your resume has been saved successfully.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React from "react";
import "react-toastify/ReactToastify.css";
import AlertImg from "../assets/msg_alert.svg";
import AlertOkImg from "../assets/msg_ok.svg";

export function ErrorToast(props) {
  return (
    <>
      <div className="float-left">
        <img
          src={AlertImg}
          width="18"
          height="18"
          className="d-inline-block align-top mx-3"
        ></img>
      </div>
      <div className="float-left w-75">
        <span>{props.message}</span>
      </div>
    </>
  );
}

export function SuccessToast(props) {
  return (
    <>
      <div className="float-left">
        <img
          src={AlertOkImg}
          width="15"
          height="15"
          className="d-inline-block align-top mx-3"
        ></img>
      </div>
      <div className="float-left w-75">
        <span>{props.message}</span>
      </div>
    </>
  );
}

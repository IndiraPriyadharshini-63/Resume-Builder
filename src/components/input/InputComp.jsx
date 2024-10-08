import React from "react";
import "./InputComp.css";
import {inputCheck} from "../../utilities/InputCheck"
import { TextField } from "@mui/material";

function InputComp(props) {
  // console.log(props);
  return (
    <div className="input-component">
      <p className="input-title">{props.title}</p>
      <TextField
        {...props.register(props.name, inputCheck(props.type, props.name))}
        multiline={props.multiline}
        rows={5}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value.toString())}
        error={props.error}
        variant="outlined"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        helperText={props.errorMessage ? props.errorMessage : null}
      ></TextField>
    </div>
  );
}

export default InputComp;

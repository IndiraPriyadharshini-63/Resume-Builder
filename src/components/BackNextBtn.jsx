import { Button, CircularProgress } from "@mui/material";
import React from "react";

function BackNextBtn(props) {
  return (
    <div className="back-Next-btn-cont">
      {props.tab <= 0 ? null : (
        <Button
          className="outlined-btn"
          sx={{ marginRight: "20px" }}
          variant="outlined"
          onClick={props.onBack}
        >
          {props.backTitle}
        </Button>
      )}
      {props.loading ? (
        <CircularProgress size={20} style={{ marginLeft: "30px" }} />
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle}
        </Button>
      )}
    </div>
  );
}

export default BackNextBtn;

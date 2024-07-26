import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  styled,
} from "@mui/material";

import { connect } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { ADDPERSONALINFO } from "../Redux/Actions";
import { useForm } from "react-hook-form";
import Avatar1 from "react-avatar-edit";
import InputComp from "./InputComp";

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfoReducer.personalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onADDPERSONALINFO: (details) => dispatch(ADDPERSONALINFO(details)),
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function PersonalInfo(props) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [img, setImg] = useState("");

  const [open, setOpen] = useState(false);
  const [storeImg, setStoreImg] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = (data) => {
    setLoading(true);
    props.onADDPERSONALINFO({ profileImg: img, ...data });

    setTimeout(() => {
      setLoading(false);
      props.setTab(props.tab + 1);
    }, 1000);
  };

  const onCrop = (view) => {
    setImg(view);
  };

  const onClose = (view) => {
    setImg(null);
  };

  // Windows Width
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const saveImage = () => {
    setStoreImg([{ img } ? img : " "]);
    setOpen(false);
  };

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  return (
    <Paper className="personal-info-paper" elevation={3}>
      <Avatar
        sx={{ width: 120, height: 120, marginBottom: 1 }}
        alt="profile img"
        src={
          img.length
            ? img
            : "https:harvesthosts-marketing-assets.s3.amazonaws.com/wp-content/uploads/2021/11/whoknows-1.jpg"
        }
      />
      <div>
        <Button
          className="change-profile-photo-btn"
          variant="outlined"
          onClick={handleClickOpen}
        >
          Change Profile Photo
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Upload Image
          </BootstrapDialogTitle>
          <DialogContent>
            <Avatar1
              width={windowSize.innerWidth > 900 && 300}
              height={windowSize.innerWidth > 500 ? 300 : 150}
              onCrop={onCrop}
              onClose={onClose}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus variant="contained" onClick={saveImage}>
              Upload
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <form>
         <div className="personal-info-form-fields">
            <InputComp />
            <InputComp />
            <InputComp />
         </div>
      </form>
    </Paper>
  );
}

export default PersonalInfo;

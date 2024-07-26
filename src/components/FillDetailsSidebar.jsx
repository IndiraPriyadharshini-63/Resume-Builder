import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  AccountCircleOutlined,
  MoreVert,
  SchoolRounded,
  StarsRounded,
  WorkHistoryOutlined,
} from "@mui/icons-material";

let ItemHeight = 50;
function FillDetailsSidebar(props) {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    console.log("clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("closed");
    setAnchorEl(null);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function PersonalInfo() {
    props.setTab(0);
  }

  function WorkExperience() {
    props.setTab(1);
  }

  function Education() {
    props.setTab(2);
  }

  function keySkill() {
    props.setTab(3);
  }
  return (
    <div>
      {windowSize.innerWidth > 800 ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(229, 229, 229)",
            height: "fit-content",
          }}
        >
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 0
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <AccountCircleOutlined
                  color={props.tab === 0 ? "info" : "disabled"}
                />
                <ListItemText
                  className="Items"
                  onClick={PersonalInfo}
                  primary="Personal Info"
                  sx={
                    props.tab === 0
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 0
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <WorkHistoryOutlined
                  color={props.tab === 1 ? "info" : "disabled"}
                />
                <ListItemText
                  className="Items"
                  onClick={WorkExperience}
                  primary="Work Experience"
                  sx={
                    props.tab === 1
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 2
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <SchoolRounded color={props.tab === 2 ? "info" : "disabled"} />
                <ListItemText
                  className="Items"
                  onClick={Education}
                  primary="Education"
                  sx={
                    props.tab === 2
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 3
                    ? { borderLeft: "3px solid rgb(0, 128, 255)" }
                    : null
                }
              >
                <StarsRounded color={props.tab === 3 ? "info" : "disabled"} />
                <ListItemText
                  className="Items"
                  onClick={keySkill}
                  primary="Key Skills"
                  sx={
                    props.tab === 3
                      ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ) : (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{ "aria-labelledby": "long-button" }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ItemHeight * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem
              sx={props.tab === 0 ? { color: "rgb(0, 128, 255)" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <AccountCircleOutlined
                color={props.tab === 0 ? "info" : "disabled"}
              />
              <ListItemText
                onClick={PersonalInfo}
                className="Items"
                primary="Personal Info"
                sx={
                  props.tab === 0
                    ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 1 ? { color: "rgb(0, 128, 255)" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <WorkHistoryOutlined
                color={props.tab === 1 ? "info" : "disabled"}
              />
              <ListItemText
                className="Items"
                onClick={WorkExperience}
                primary="Work Experience"
                sx={
                  props.tab === 1
                    ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 2 ? { color: "rgb(0, 128, 255)" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <SchoolRounded color={props.tab === 2 ? "info" : "disabled"} />
              <ListItemText
                className="Items"
                onClick={Education}
                primary="Education"
                sx={
                  props.tab === 2
                    ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 3 ? { color: "rgb(0, 128, 255)" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <StarsRounded color={props.tab === 3 ? "info" : "disabled"} />
              <ListItemText
                className="Items"
                onClick={keySkill}
                primary="Key Skills"
                sx={
                  props.tab === 3
                    ? { color: "rgb(0, 128, 255)", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default FillDetailsSidebar;

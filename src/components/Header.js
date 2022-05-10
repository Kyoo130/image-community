import React from "react";
import { Grid, Text } from "../elements";
import NotiBadge from "./NotiBadge";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HomeIcon from "@mui/icons-material/Home";

import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = !!sessionStorage.getItem(_session_key);

  if (is_login && is_session) {
    return (
      <>
        <Grid is_flex padding="12px 16px" border_bt="2px solid #eee">
          <Grid
            _onClick={() => {
              history.push("/");
            }}
          >
            <Text margin="0px" size="18px" color="#EC6237" bold>
              Image Community
            </Text>
          </Grid>

          <Grid is_flex>
            <IconButton
              aria-label="Example"
              sx={{ color: deepOrange[400] }}
              onClick={() => {
                history.push("/");
              }}
            >
              <HomeIcon />
            </IconButton>

            <IconButton
              aria-label="Example"
              sx={{ color: deepOrange[400] }}
              onClick={() => {
                history.push("/write");
              }}
            >
              <AddBoxIcon />
            </IconButton>

            <IconButton aria-label="Example">
              <NotiBadge
                _onClick={() => {
                  history.push("/noti");
                }}
              />
            </IconButton>

            <IconButton
              aria-label="Example"
              sx={{ color: deepOrange[400] }}
              onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid is_flex padding="12px 16px" border_bt="2px solid #eee">
        <Grid
          _onClick={() => {
            history.push("/");
          }}
        >
          <Text margin="0px" size="18px" color="#EC6237" bold>
            Image Community
          </Text>
        </Grid>

        <Grid is_flex width="auto">
          <IconButton
            aria-label="Example"
            sx={{ color: deepOrange[400], mx: 3 }}
            onClick={() => {
              history.push("/login");
            }}
          >
            <LoginIcon />
          </IconButton>
          <IconButton
            aria-label="Example"
            sx={{ color: deepOrange[400] }}
            onClick={() => {
              history.push("/signup");
            }}
          >
            <PersonAddAltIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;

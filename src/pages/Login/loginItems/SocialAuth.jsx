import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import { Stack, Button, IconButton } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import './socialAuth.scss'
const SocialAuth = () => {
  return (
    <Fragment>
      <Stack direction="row" spacing={2} sx={{justifyContent:'space-between'}} width="100%">
        <IconButton
         className="iconbtn">
          <Google width={22} height={22} />
        </IconButton>
        <IconButton
         className="iconbtn">
          <Facebook width={22} height={22} />
        </IconButton>
        <IconButton
          className="iconbtn">
          <GitHub width={22} height={22} />
        </IconButton>
      </Stack>
    </Fragment>
  );
};

export default SocialAuth;

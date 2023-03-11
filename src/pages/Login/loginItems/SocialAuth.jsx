
import { Facebook, Google, Twitter } from "@mui/icons-material";
import { Stack, Button, IconButton } from "@mui/material";
import React from "react";
import { Fragment } from 'react';

const SocialAuth = () => {
  return (
    <Fragment>
      <Stack direction="row" spacing={2}>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem", color:'#000',
            flex: 1,
          }}
        >
          <Google width={22} height={22} />
        </IconButton>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem", color:'#000',
            flex: 1,
          }}
        >
          <Facebook
           
            width={22}
            height={22}
          />
        </IconButton>
        <IconButton
          sx={{
            border: "2px solid #ccc",
            borderRadius: "5px",
            padding: "0.5675rem",
            color:'#000',
            flex: 1,
          }}
        >
          <Twitter
           
            width={22}
            height={22}
          />
        </IconButton>
      </Stack>
    </Fragment>
  );
};

export default SocialAuth;

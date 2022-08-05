import { Button, Typography } from "@mui/material";
import React from "react";
import { HOW_TO_REGISTER } from "../../constants/registration";

export default function Register() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Typography variant="h1">Registration</Typography>
      <div style={{ padding: "10px 150px 50px 150px" }}>
        <div>
          <Typography variant="p">{HOW_TO_REGISTER}</Typography>
        </div>
        <div
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "10px",
          }}
        >
          <Button
            variant="contained"
            size="large"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          >
            Register Here
          </Button>
        </div>
      </div>
    </div>
  );
}

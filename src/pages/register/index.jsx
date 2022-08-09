import { Button, Typography } from "@mui/material";
import React from "react";
import { HOW_TO_REGISTER } from "../../constants/registration";

export default function Register() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Typography variant="h1">Registration</Typography>
      <div
        style={{
          padding: "10px 20px 50px 20px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1000px",
        }}
      >
        <div>
          <Typography variant="p">{HOW_TO_REGISTER}</Typography>
        </div>
        <div style={{ padding: "20px 25px 50px 25px" }}>
          <Typography variant="p">
            <strong>Step 1:</strong> Fill out the CVENT Registration form + use
            your McGill e-mail. If you do not use your McGill e-mail, the
            platform will not let you register.{" "}
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="p">
            <strong>Step 2:</strong> Make note of your CVENT Confirmation number
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="p">
            <strong>Step 3:</strong> Click the payment link - you NEED your
            CVENT Confirmation number to be able to complete payment
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="p">
            <strong>Step 4:</strong> Complete the MANDATORY trainings. There are
            3 in total: the Sexual Violence training called{" "}
            <q>It Takes All of Us</q>, the <q>Anti-Oppression</q> training and
            the <q>Frosh 101</q> training all on MyCourses
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="p">
            <strong>Step 5:</strong> Come pick up your credentials and gear at
            your faculties Registration tent (DON'T FORGET YOUR MCGILL ID!)
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="p">
            *You must complete Steps 1-4 before coming to pick up your
            credentials and gear*
          </Typography>
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
            href="https://cvent.me/52WvWg"
          >
            Register Here
          </Button>
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
            href="https://drive.google.com/file/d/1c3cRhjv1KXxtrfnLfsSKHiImp28Rdzv_/view?usp=sharing"
          >
            Bursary Form
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Button, Typography } from "@mui/material";
import React from "react";
import { HOW_TO_REGISTER, STEPS_TO_TAKE } from "../../constants/registration";

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
          {STEPS_TO_TAKE.map((step, index) => (
            <div style={{ paddingBottom: "1em" }}>
              <Typography variant="p">
                {step}
              </Typography>
            </div>
          ))}
          <Typography variant="p">
            *You must complete Steps 1-4 before coming to pick up your
            credentials and gear*
          </Typography>
        </div>
        <div style={{paddingBottom: "50px"}}>
          <Typography variant="p">
            <strong>Reach out to oweek.communications@eusmcgill.ca if you have nay questions.</strong>
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
            href="https://cvent.me/QKmENQ?rt=h04V-a1XhkCyMnroqPjTrw"
            target="_blank"
          >
            Register Here
          </Button>
        </div>
        {/*<div
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
            href="https://dochub.com/oweek-communications/EB5r38Awl013ZYpwXzZ1kD/pdf-frosh-2023-bursary-application-participants-pdf"
            target="_blank"
          >
            Bursary Form
          </Button>
        </div>*/}
      </div>
    </div>
  );
}
import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import ScheduleImage from "../../images/schedule.png";

export default function Schedule() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Typography variant="h1">Schedule</Typography>

      <Card
        style={{
          width: "fit-content",

          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CardMedia
          component="img"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: "5px",
          }}
          image={ScheduleImage}
          alt="No img"
        />
      </Card>
    </div>
  );
}

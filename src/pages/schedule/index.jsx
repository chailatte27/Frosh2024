import React from "react";
import { useTheme } from "@emotion/react";
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
                  width: "auto",
                  height: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "90%",
                  objectFit: "contain",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
                image={ScheduleImage}
                alt="No img"
              />
          </Card>
    </div>
  );
}

import { Typography } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <Typography variant="h1">Map</Typography>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "640px",
          width: "100%",
          paddingTop: "20px",
        }}
      >
          <iframe 
          src="https://www.google.com/maps/d/embed?mid=1eL5VL549haGua8yGB-TihPa0CD7_vZs&ehbc=2E312F" 
          width="640" 
          height="480">
          </iframe>
      </div>
    </div>
  );
}

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
          src="https://www.google.com/maps/d/u/0/embed?mid=1xkC5edeGraK4moqIgJbXdv0u1ip-n98&ehbc=2E312F"
          width="100%"
          height="480"
        ></iframe>
      </div>
    </div>
  );
}

import { useTheme } from "@emotion/react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <div style={{ backgroundColor: theme.background, paddingTop: "15px" }}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
        }}
      >
        <IconButton
          size="large"
          href="https://www.instagram.com/engineeringfrosh/"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          size="large"
          href="https://www.facebook.com/EngineeringFrosh/"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          size="large"
          href="https://www.youtube.com/c/McGillEngineeringOrientationWeek"
        >
          <YouTubeIcon />
        </IconButton>
      </div>

      <Typography
        variant="h6"
        style={{
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        McGill EUS Frosh 2022
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          width: "100%",
        }}
      >
        Address: 845 Sherbrooke St W • Montreal, QC • H3A 0G4
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          width: "100%",
        }}
      >
        Phone : (514) 398-4455
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "14px",
          width: "100%",
          textAlign: "center",
        }}
      >
        Email : oweek.mcgilleus.ca
      </Typography>
      <hr style={{ width: "50%", opacity: 0.2 }} />
      <Typography
        variant="h6"
        style={{
          fontSize: "12px",
          width: "100%",
          textAlign: "center",
          opacity: 0.5,
        }}
      >
        &copy; McGill EUS 2022 <br />
        Made by Ryan Reszetnik
      </Typography>
    </div>
  );
}

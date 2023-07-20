import { useTheme } from "@emotion/react";
import { Card, CardMedia, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { WHAT_IS_FROSH } from "../../constants/home";
import Header from "../../images/header_welcome.png";
import SponsorImage from "../../images/sponsors.png";

const HEADER_HEIGHT = "max(460px, 45vw)";

export default function Home() {
  const theme = useTheme();
  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          textAlign: "center",
          zIndex: -1,
          width: "100%",
          height: HEADER_HEIGHT,

          paddingLeft: "auto",
          paddingRight: "auto",
        }}
      >
        <img
          alt="Frosh Banner"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
          src={Header}
        />
      </div>
      <div
        style={{
          zIndex: 1,
          backgroundColor: theme.background,
          borderRadius: "5px 5px 0 0",
          boxShadow: `0px 20px 60px 90px ${theme.background}`,
          // boxShadow: `0px -6px 40px 15px ${theme.background}`,
          marginTop: HEADER_HEIGHT,
        }}
      >
        <div style={{ padding: "10px 50px 50px 50px" }}>
          <Typography variant="h2">What is Frosh?</Typography>
          <Typography variant="p">{WHAT_IS_FROSH}</Typography>
        </div>
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            height: "fit-content",
          }}
        >
          <Typography variant="h2">Frosh Trailer</Typography>
          <iframe
            title="Frosh Trailer"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/MsfbEhUl30s"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div>
          <Typography variant="h2">Sponsors</Typography>
          <Card
            style={{
              width: "fit-content",
              marginLeft: "auto",
              marginRight: "auto",
              ...(theme.palette.mode === "dark"
                ? { backgroundColor: "#13124a" }
                : {}),
            }}
          >
            <CardMedia
              component="img"
              style={{
                width: "auto",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "50%",
                objectFit: "contain",
                borderRadius: "5px",
                marginBottom: "10px",
                backgroundColor: theme.background,
              }}
              
              image={SponsorImage}
              alt="No img"
            />
            <div>
              
              <Typography
                variant="h6"
                style={{
                  fontSize: "20px",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: theme.background,
                }}
              >
                Want some stickers? Visit{" "}
                <a href="https://www.stickermule.com/" style={{ color: "orange" }} target="_blank" rel="noopener noreferrer">Stickermule</a>
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

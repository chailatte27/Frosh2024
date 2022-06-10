import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { TIMELINE } from "../../constants/timeline";
import moment from "moment";
import { Parallax } from "react-scroll-parallax";

export default function UpcomingTimeline() {
  const numLinesCompleted = TIMELINE.reduce(function (num, event) {
    return num + moment(event.start).isBefore(moment()) ? 1 : 0;
  }, 0);
  const now = moment();
  const theme = useTheme();

  const getTimeString = (start, end) => {
    if (moment(start).format("MMM Do") === moment(end).format("MMM Do")) {
      return moment(start).format("MMM Do");
    }
    return `${moment(start).format("MMM Do")} - ${moment(end).format(
      "MMM Do"
    )}`;
  };

  const getBackgroundColor = (index) => {
    return index <= numLinesCompleted
      ? theme.palette.primary[300]
      : "lightgrey";
  };

  return (
    <React.Fragment>
      <Typography variant="h2">Key Dates</Typography>
      <Timeline position="alternate" style={{ overflow: "hidden" }}>
        {TIMELINE.map((item, index) => (
          <TimelineItem
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <TimelineOppositeContent
              sx={{ mt: "auto", mb: "auto" }}
              color="text.secondary"
            >
              {getTimeString(item.start, item.end)}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ backgroundColor: getBackgroundColor(index) }}
              />
              <TimelineDot
                sx={{ backgroundColor: getBackgroundColor(index) }}
              />
              <TimelineConnector
                sx={{ backgroundColor: getBackgroundColor(index) }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Parallax
                translateX={index % 2 == 1 ? [-50, -150] : [50, 150]}
                easing={[1, 0, 1, 0]}
              >
                <Parallax
                  translateX={index % 2 == 1 ? [-50, 50] : [50, -50]}
                  easing={[0, 1, 0, 1]}
                >
                  <Card
                    sx={{
                      maxWidth: "400px",
                      width: "fit-content",
                      minWidth: "250px",
                      ...(index % 2 === 1 ? { marginLeft: "auto" } : {}),
                    }}
                  >
                    <CardContent>
                      <div style={{ textAlign: "center" }}>
                        <Typography sx={{ pt: "5px" }} variant="h6">
                          {item.title}
                        </Typography>
                        <Typography variant="p">{item.description}</Typography>
                      </div>
                    </CardContent>
                    {item.image && (
                      <CardMedia
                        component="img"
                        style={{
                          width: "auto",
                          height: "auto",
                          marginLeft: "auto",
                          marginRight: "auto",
                          maxWidth: "90%",
                          maxHeight: "200px",
                          objectFit: "contain",
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                        image={item.image}
                        alt="No img"
                      />
                    )}
                  </Card>
                </Parallax>
              </Parallax>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </React.Fragment>
  );
}

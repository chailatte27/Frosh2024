import { Typography } from "@mui/material";

import ThemeRelease1 from "../images/theme_release_1.JPG";
import ThemeRelease2 from "../images/theme_release_2.JPG";

export const TIMELINE = [
  {
    start: "2022-05-05",
    end: "2020-05-05",
    title: "Theme Hint 1",
    description:
      "This is some description for the theme hint 1 with a long description that will be truncated",
    image: ThemeRelease1,
  },
  {
    start: "2020-06-08",
    end: "2020-06-08",
    title: "Theme Hint 2",
    description:
      "This is some description for the theme hint 2 with a long description",
    image: ThemeRelease2,
  },
  {
    start: "2020-08-01",
    end: "2020-08-01",
    title: "Theme Release",
    description: "",
    image: null,
  },
  {
    start: "2020-08-20",
    end: "2020-08-26",
    title: "Residence Move-in Week",
    description: "",
    image: null,
  },
  {
    start: "2020-08-23",
    end: "2020-08-23",
    title: "Discover McGill",
    description: (
      <Typography>
        Discover McGill is a chance to learn about McGill's Student Services,
        resources for academic and personal success and more! You will meet your
        faculty advisors and staff, and learn how to get involved in student
        life. For more information including registration and schedule, please
        visit{" "}
        <a href="http://mcgill.ca/firstyear/undergraduate/orientation-week/fall">
          here
        </a>
      </Typography>
    ),
    image: null,
  },
  {
    start: "2020-08-25",
    end: "2020-08-29",
    title: "FROSH!!!",
    description: "",
    image: null,
  },
];

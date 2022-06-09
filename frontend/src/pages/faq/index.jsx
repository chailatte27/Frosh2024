import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { FAQQuestions } from "../../constants/faq";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        maxWidth: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10px",
      }}
    >
      <Typography variant="h2">FAQ</Typography>
      {FAQQuestions.map((q, i) => (
        <Accordion
          expanded={expanded === q.question}
          onChange={handleChange(q.question)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ fontSize: "1.15em" }}>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{q.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

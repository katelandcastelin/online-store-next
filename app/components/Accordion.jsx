'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sx={{backgroundColor: 'transparent'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Size Chart
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Image rendered
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor: 'transparent'}} square={true} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Details and Care
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Remove ribbons before washing. Cold hand wash only. Hang to dry or lay on a ventilated surface.
            Keep out of direct sunlight. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor: 'transparent'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '44%', flexShrink: 0 }}>
            Shipping Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            South Africa:
            <br />
            Aramex - R100 ships to your door and takes 1 - 3 days.
            <br />
            PostNet - R110 ships to your nearest PostNet and takes 1 - 3 days.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor: 'transparent'}} square={true} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Reviews
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Reviews rendered from the data file
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

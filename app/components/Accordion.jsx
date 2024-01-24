'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SizeChartCorset from './SizeChartCorset';

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
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'white' }}>
            Size Chart
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: 'white' }}>
            {/* corset size chart */}
            <SizeChartCorset />
            {/* underbust size chart */}
            {/* skirt size chart */}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor: 'transparent'}} square={true} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'white' }}>
            Details and Care
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Care instructions
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{backgroundColor: 'transparent'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '44%', flexShrink: 0, color: 'white' }}>
            Shipping Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
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
          <Typography sx={{ width: '33%', flexShrink: 0, color: 'white' }}>
            Reviews
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'white' }}>
            Reviews rendered from the data file
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

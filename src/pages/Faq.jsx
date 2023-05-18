import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/faq.css'

const Faq = () => {
  return (
   <section className='faq-index'>
    <div className="container">
        <div className="row">
        <h1>FAQS</h1>
    <p>While the judging panel whittles our 10 Fashion Discovery finalists down to two overall winners, 
        it’s time for you to decide who should claim the coveted People’s Pick award.</p>
    <p>
The People’s Pick winner will have an edit of their collection sold on ASOS for a season – and if they happen to scoop 
the main competition prize as well, they’ll be awarded an additional £10,000 instead. </p>
   <div className="accordion-index">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why has ASOS created this competition?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ASOS has a long history of supporting new design talent and emerging brands, but there is a clear opportunity 
          to implement a more formal initiative and reach a wider pool of talent. 
          As such, we will be creating this brand incubator initiative, which is called ASOS Fashion Discovery.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is the prize?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The public will also have the opportunity to select via an online vote their “People’s Pick” from the shortlisted businesses. The Winner of the People’s Pick will receive an edit of their brand’s collection to be sold on ASOS.com (and local language sites at ASOS’ discretion) for one season. If the People’s Pick winner is also a winner of the main competition, the People’s
           Pick winner will receive £10,000 cash instead to be used to help grow their brand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is the People's Pick award and how does my vote make a difference?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The People’s Pick winner will have an edit of their collection sold on ASOS for one season. If the judges decide they are also a winner of the main competition, they’ll receive £10,000 cash instead. The brand that receives the highest number of votes from the public will be awarded the People’s Pick.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is the People's Pick award and how does my vote make a difference?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The People’s Pick winner will have an edit of their collection sold on ASOS for one season. If the judges decide they are also a winner of the main competition, they’ll receive £10,000 cash instead. The brand that receives the highest number of votes from the public will be awarded the People’s Pick.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
                            Can I vote for more than one brand?
                        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Although we know it’s tough to pick a favourite, unfortunately you can only vote once.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          Who can I contact if I have questions?
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hopefully all the answers to your questions are in these FAQs and in the competition Ts&Cs. However
           if you have questions that remain unanswered please email: asosfashiondiscovery@asos.com
          </Typography>
        </AccordionDetails>
      </Accordion>
      
   </div>
        </div>
    </div>
   </section>
  )
}

export default Faq
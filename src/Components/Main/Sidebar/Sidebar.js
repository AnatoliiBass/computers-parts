import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { sidebar } from './Sidebar.module.css'
import Title from '../../UI/Title/Title'
const Sidebar = () => {
   return (
      <section className={sidebar}>
         <Title size="h5" seo="h2" description="Computer parts" />
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography>Components</Typography>
            </AccordionSummary>
            <AccordionDetails>
               {/* <Accordion>

               </Accordion> */}
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography>Sound cards</Typography>
               </AccordionSummary>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography>Video cards</Typography>
               </AccordionSummary>
            </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2a-content"
               id="panel2a-header"
            >
               <Typography>Network hardware</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
               </Typography>
            </AccordionDetails>
         </Accordion>
         <Accordion disabled>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel3a-content"
               id="panel3a-header"
            >
               <Typography>Disabled Accordion</Typography>
            </AccordionSummary>
         </Accordion>
      </section>
   )
}

export default Sidebar
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const AccordionItems = ({ infoArray }) => {
   const keys = Object.keys(infoArray)
   return (
      <>
         {keys.map((item, index) => (
            <Accordion key={Math.floor(Math.random() * 100) + index}>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
               >
                  <Typography>{item}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  {
                     infoArray[item].map((element, i) => (
                        <AccordionSummary key={Math.floor(Math.random() * 200) + i}>
                           <Typography>{element}</Typography>
                        </AccordionSummary>
                     ))
                  }
               </AccordionDetails>
            </Accordion>
         ))}
      </>
   )
}

export default AccordionItems
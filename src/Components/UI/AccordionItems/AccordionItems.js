import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NavLink } from "react-router-dom"

const AccordionItems = ({ infoArray }) => {
   return (
      <div>
         {infoArray.categories.map(item => (
            <Accordion key={item.id}>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
               >
                  <Typography>{item.name}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  {
                     item.items.map(element => (
                        <AccordionSummary key={element.id}>
                           <NavLink to="/productcards"><Typography>{element.name}</Typography></NavLink>
                        </AccordionSummary>
                     ))
                  }
               </AccordionDetails>
            </Accordion>
         ))}
      </div>
   )
}

export default AccordionItems
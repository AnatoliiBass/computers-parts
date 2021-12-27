import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NavLink } from "react-router-dom"
import { link } from './AccordionItems.module.css'

const AccordionItems = ({ infoArray }) => {
   return (
      <div>
         {infoArray.map(item => (
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
                           <NavLink className={link} to={`/parts/${item.id}/${element.id}`}><Typography>{element.name}</Typography></NavLink>
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
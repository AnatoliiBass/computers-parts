import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const FeaturesTable = ({ features }) => {

   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell align="left">Names</TableCell>
                  <TableCell align="left">Values</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {features.map((row, index) => (
                  <TableRow
                     key={Date.now() + index}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        {row.name}
                     </TableCell>
                     <TableCell align="left">{row.value}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}

export default FeaturesTable
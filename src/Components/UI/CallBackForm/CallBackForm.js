import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { callbackform, mainbox } from './CallBackForm.module.css'

const CallBackForm = () => {
   const [{ name, email, text }, setName] = React.useState('')
   const handleChange = (event) => {
      setName(event.target.value)
   };

   return (
      <Box
         className={mainbox}
         component="form"
         sx={{
            '& > :not(style)': { m: 1, width: '80ch' },
         }}
         Validate
         autoComplete="off"
      >
         <Box
            className={callbackform}
            sx={{
               '& > :not(style)': { m: 1, width: '40ch' },
            }}
            Validate
            autoComplete="off">
            <TextField
               id="text-name"
               label="Name"
               helperText="Please enter your name"
               value={name}
               onChange={handleChange}
            />
            <TextField
               id="text-email"
               label="Email"
               helperText="Please enter your email"
               value={email}
               onChange={handleChange}
            />
         </Box>
         <TextField
            id="text-question"
            label="Your question or prupose"
            multiline
            row={4}
            value={text}
            onChange={handleChange}
         />
         <div>
            <Button variant="outlined" color="inherit">Send</Button>
         </div>
      </Box>
   )
}

export default CallBackForm
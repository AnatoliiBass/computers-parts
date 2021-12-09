import { Button } from "@mui/material"

const Session = ({ user }) => {
   return (
      <Button color="inherit" disabled>User session: {user}</Button>
   )
}

export default Session
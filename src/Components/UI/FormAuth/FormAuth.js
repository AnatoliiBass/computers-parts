import { Authenticator } from "@aws-amplify/ui-react"

const FormAuth = () => {
   return (
      <Authenticator>
         {({ signOut }) => (<div>{signOut()}</div>)}
      </Authenticator>
   )
}

export default FormAuth
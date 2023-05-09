import {Logout} from "./Logout"
const Welcome = ({user}) => {

    return (
      <>
      <Logout></Logout>
      <div>Welcome {user.username.toUpperCase()}</div>
      </>
    )
  }
  
  export default Welcome
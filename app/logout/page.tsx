"use client"
import {SignOutButton} from "authiq"
const Logout = () => {
  return (
    <div>
      <SignOutButton label='logout now' redirectUrl='/sign'/>
    </div>
  )
}

export default Logout
"use client"
import {useValidateUser} from "authiq"
const NpmPage = () => {
    const {data } = useValidateUser()
    console.log(data)
  return (
    <div>NpmPage</div>
  )
}

export default NpmPage
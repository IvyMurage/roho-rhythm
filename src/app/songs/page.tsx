'use client'
import { useContext, useEffect } from "react"
import { AuthContext } from "src/utils/context"



function Song() {
  const accessToken = useContext(AuthContext)
  console.log(accessToken)



  return (
    <div>Song</div>
  )
}

export default Song
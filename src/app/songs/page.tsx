'use client'
import { useEffect } from "react"

function Song() {

  const getAccessToken = async () => {
    const response = await fetch('/api/access-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    })
    const data = await response.json()
    console.log(data)

  }
  useEffect(() => {
    getAccessToken()
  }, [])

  return (
    <div>Song</div>
  )
}

export default Song
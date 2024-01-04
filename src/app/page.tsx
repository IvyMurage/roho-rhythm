import { Alert, Box } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { AuthContext } from "src/utils/context";

export default function Home() {

  const accessToken = useContext(AuthContext)

  useEffect(() => {
    const getALbums = async () => {
      try {
        const response = await fetch('  https://api.spotify.com/v1/me/albums', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })

        const data = await response.json()
        if (response.ok) {
          console.log(data)
        }
      }

      catch (error) {
        <Alert severity="error">This is an error alert — check it out!</Alert>
        console.log(error)
      }
    }
  })


  return (
    <div className=" flex relative items-center justify-between">
      <div className=" h-full">
        <h1 className="font-bold py-3 tracking-wider text-[52px] my-[20%] text-[#ffdb58]">
          The Roho Ryhthm
          <br />
          Playlist
        </h1>
      </div>

      <div className="overflow-hidden">
        <Image className=" fixed right-[-200px]  top-[-50px] overflow-hidden " src='/../assets/music_girl.png' alt='music girl' width="800" height="300" />
      </div>


    </div>

  )
}

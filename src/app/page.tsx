'use client'
import { Alert } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "src/utils/context";
type AlbumType = {
  id: string;
  name: string;
  image: string;
}[]


export default function Home() {
  const [album, setAlbums] = useState<AlbumType | []>([])

  const accessToken = useContext(AuthContext)

  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/tracks', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })

        const data = await response.json()
        if (response.ok) {
          setAlbums(data?.items?.map((item: { track: { name: string; id: string; album: { images: { url: string; }[]; }; }; }) => {
            return {
              id: item.track.id,
              name: item.track.name,
              image: item.track.album.images[0].url
            }
          }))
        }

      }

      catch (error) {
        <Alert severity="error">This is an error alert — check it out!</Alert>
        console.log(error)
      }
    }
    getAlbums()
  }, [accessToken])

  const albumImages = album.map((image) => {
    return (
      <div key={image.id} className="flex flex-col justify-center items-center">
        <Image className=' shadow-lg rounded-md' src={image.image} alt={image.name} width="150" height="200" />
        <p className="font-bold text-[#ffdb58]">{image.name}</p>
      </div>
    )
  }).splice(0,5)
  return (
    <>
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
      <div className="grid grid-flow-col z-0 top-[350px] absolute images text-[12px] scrollbar-hide w-full overflow-scroll">
        {albumImages}
      </div>
    </>
  )
}

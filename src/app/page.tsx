import Image from "next/image";

export default function Home() {
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

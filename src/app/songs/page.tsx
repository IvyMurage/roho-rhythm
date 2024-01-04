'use client'
// Import necessary types and components
import Loading from "@/components/loading";
import Search from "@/components/search";
import { Button } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "src/utils/context";

type TrackType = {
  track: {
    album: {
      album_type: string;
      artists: [
        {
          external_urls: { spotify: string };
          href: string;
          id: string;
          name: string;
          type: string;
          uri: string;
        }
      ];
      available_markets: string[];
      external_urls: { spotify: string };
      href: string;
      id: string;
      images: [
        {
          height: number;
          url: string;
          width: number;
        }
      ];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
  };
};

type SearchType = {
  search: string;
};

function Song() {
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState<SearchType | { search: '' }>({ search: '' });

  const offSet = searchParams.get('offset') || '0';
  const limit = searchParams.get('limit') || '10';
  const accessToken = useContext(AuthContext);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      if ((name === 'offset' || name === 'limit') && value.trim() !== '') {
        current.delete(name);
        current.set(name, value);
      } else if (name === 'search') {
        value.trim() !== '' ? current.set(name, value) : current.delete(name);
      }
      return current.toString();
    },
    [searchParams]
  );

  const handleChange = (num: number) => {
    const offset = Number(offSet) + num;
    const searchParams = createQueryString('offset', `${Math.max(0, offset)}`);
    router.push(`${pathname}?${searchParams}`);
  };

  useEffect(() => {
    const getSongs = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/me/tracks?offset=${offSet}&limit=${limit}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setTracks(data?.items || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSongs();
  }, [offSet, limit, accessToken]);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const searchParams = createQueryString('search', event.target.value.trim());
    router.push(`${pathname}?${searchParams}`);
  };

  useEffect(() => {
    const searchValue = searchParams.get('search') || '';
    setSearch({ search: searchValue });
    return () => {
      setSearch({ search: '' });
    };
  }, [setSearch, searchParams]);

  const searchTracked = tracks?.filter(track => track.track.album.name.toLowerCase().includes(search?.search.toLowerCase()));

  const trackList = searchTracked?.map(track => (
    <div className="p-[1rem] tracking-wide text-sm font-medium" key={track.track.album.id}>
      <Image className='rounded-md ' src={`${track.track.album.images[0].url}`} alt="album cover" width="200" height="200" />
      <div className="text-[#ffdb58] mt-2">{track.track.album.name}</div>
      <div>{track.track.album.artists[0].name}</div>
    </div>
  ));

  return (
    <>
      <Search handleChange={handleSearchChange} searchValue={search} />

      {tracks.length === 0 && <Loading />}

      <div className="grid grid-cols-3">{trackList}</div>
      <div className="mt-4 flex justify-between">
        <Button
          onClick={() => handleChange(-5)}
          className="bg-[#ffdb58] text-black text-sm tracking-wide"
          variant="contained"
        >
          Previous
        </Button>
        <Button
          onClick={() => handleChange(5)}
          className="bg-[#ffdb58] text-black text-sm tracking-wide"
          variant="contained"
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Song;


'use client'
import Loading from '@/components/loading';
import Search from '@/components/search';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from 'src/utils/context';

type AlbumType = {
  external_urls: string | undefined;
  id: string;
  name: string;
  image: string;
}[]
type SearchType = {
  search: string;
};

function Album() {
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState<SearchType | { search: '' }>({ search: '' });
  const accessToken = useContext(AuthContext)
  const [albums, setAlbums] = useState<AlbumType | []>([])
  useEffect(() => {
    const getAlbum = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/me/tracks`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setAlbums(data?.items?.map((item: { track: { album: { id: string; name: string; images: { url: any; }[]; external_urls: { spotify: string }; }; }; }) => {
            return {
              id: item.track.album.id,
              name: item.track.album.name,
              image: item.track.album.images[0].url,
              external_urls: item.track.album.external_urls.spotify

            }
          }))
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAlbum();
  }, [accessToken]);

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

  const searchedAlbum = albums.filter(album => album.name.toLowerCase().includes(search.search.toLowerCase()))
  const albumList = searchedAlbum.map(album => {
    return (
      <div key={album.id} className="mt-[1rem] w-fit">
        <Image className=' shadow-lg rounded-md' src={album.image} alt={album.name} width="200" height="200" />
        <div className="font-bold text-[#ffdb58] text-sm">{album.name}</div>
        <div><a href={album.external_urls} target="_blank" rel="noopener noreferrer" className="text-[#ffdb58]">Listen on Spotify</a></div>
      </div>
    )

  })

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


  return (
    <>
      <Search handleChange={handleSearchChange} searchValue={search} />
      {searchedAlbum.length === 0 ? <Loading /> : null}

      <div className="mt-[1rem]  w-full grid grid-cols-3 p-[1rem] items-center  ">{albumList}</div>

    </>
  )
}

export default Album
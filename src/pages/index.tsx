import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import SongCard from '@/components/SongCard';
import { Box, Flex } from '@chakra-ui/react';

export default function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    localStorage.setItem('token', window.location.search.split('=')[1]);
  }, []);

  const getSomething = async () => {
    const token = localStorage.getItem('token');

    await (token &&
      axios
        .get('http://localhost:3000/spotify', {
          headers: { Authorization: token },
        })
        .then((el) => {
          setSongs(el.data?.tracks?.items);
        }));
  };

  useEffect(() => {
    getSomething();
  }, []);

  return (
    <>
      <Link href='http://localhost:3000/auth/redirect'>
        <button>Log in</button>
      </Link>

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6' wrap='wrap' gap='30px'>
        {songs?.map((song: any, idx: number) => (
          <SongCard
            key={`${idx}-key`}
            imageUrl={song.track.album.images[0].url}
            title={song.track.name}
            artist={song?.track.artists
              ?.map((artist: any) => `${artist.name}`)
              .join(', ')}
          />
        ))}
      </Flex>
    </>
  );
}

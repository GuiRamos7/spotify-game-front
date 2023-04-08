import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

        {songs?.map((song: any, idx: number) => (
          <div key={`${idx}-key`}>
            <Image
              src={song.track.album.images[0].url}
              alt='asd aldsasdkl'
              width={150}
              height={150}
            />
          </div>
        ))}
      </Link>
    </>
  );
}

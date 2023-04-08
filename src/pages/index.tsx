import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

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

// <iframe
//   style='border-radius:12px'
//   src='https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator&theme=0'
//   width='100%'
//   height='352'
//   frameBorder='0'
//   allowfullscreen=''
//   allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
//   loading='lazy'
// ></iframe>;

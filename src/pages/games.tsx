import axios from 'axios';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { parseCookies } from 'nookies';

import SongCard from '@/components/SongCard';
import { Button, Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next/types';
import ReactAudioPlayer from 'react-audio-player';
import { useRouter } from 'next/router';

const Games = ({ songs, rightAnwserDefault, randomNumber }: any) => {
  const [songsStep, setSongsStep] = useState<any>();
  const [step, setStep] = useState(0);
  const [rightAnwser, setRightAnwser] = useState<any>(rightAnwserDefault);
  const random = randomNumber;
  const { push } = useRouter();

  const [started, setStarted] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [selected, setSelected] = useState<any>(undefined);

  useEffect(() => {
    started &&
      setTimeout(() => {
        setIsOver(true);
      }, 30000);
  }, [started]);

  return (
    <>
      <Flex
        w='100%'
        my='100'
        maxW={1080}
        mx='auto'
        px='6'
        justify='center'
        direction='column'
      >
        <audio id='song' src={rightAnwserDefault.track.preview_url}></audio>

        <Flex wrap='wrap' gap='40px'>
          {rightAnwser &&
            songs[step].map((el: any, idx: number) => {
              return (
                <SongCard
                  key={`key-${idx}`}
                  imageUrl={el.track.album.images[1].url}
                  title={el.track.name}
                  artist={el.track.artists[0].name}
                  isCorrect={
                    selected && el.track.id === selected.track.id
                      ? selected.track.id === rightAnwser.track.id
                      : undefined
                  }
                  onClick={() => {
                    setSelected(el);
                    setIsOver(true);
                  }}
                />
              );
            })}

          {!started && (
            <Button
              backgroundColor='green.500'
              color='gray.900'
              w='200px'
              borderRadius='100px'
              alignSelf='center'
              onClick={() => {
                let audioPlayer: any = document.getElementById('song');

                audioPlayer.play();
                setStarted(true);
              }}
            >
              Começar
            </Button>
          )}
          {isOver && (
            <Button
              backgroundColor='green.500'
              color='gray.900'
              w='200px'
              borderRadius='100px'
              alignSelf='center'
              onClick={() => {
                push('/');
              }}
            >
              Recomeçar
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = parseCookies(ctx).spotifyToken;
  const randomNumber = Math.floor(Math.random() * (4 - 0 + 1) + 0);
  let rightAnwserDefault;
  const songs = await axios
    .get('https://spotify-game-git-dev-guiramos7.vercel.app/spotify', {
      headers: { Authorization: token },
    })
    .then((el) => {
      rightAnwserDefault = el.data[0][randomNumber];
      return el.data;
    });

  return {
    props: {
      songs,
      rightAnwserDefault,
      randomNumber,
    },
  };
};

export default Games;

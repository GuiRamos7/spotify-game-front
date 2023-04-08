import { useEffect } from 'react';
import { Button, Flex, Link } from '@chakra-ui/react';
import { parseCookies, setCookie } from 'nookies';
import { useRouter } from 'next/router';

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    const cookies = parseCookies();

    window.location.search &&
      setCookie(null, 'spotifyToken', window.location.search.split('=')[1], {});

    cookies.spotifyToken && push('/games');
  }, [push]);

  return (
    <Flex
      w='100%'
      my='6'
      maxW={1480}
      mx='auto'
      px='6'
      justify='center'
      direction='column'
    >
      <Link
        m='auto'
        href='https://spotify-game-1wdatcpug-guiramos7.vercel.app/auth/redirect'
      >
        <Button
          w='300px'
          borderRadius='100px'
          backgroundColor='#1cd760'
          _hover={{ backgroundColor: '#179b48' }}
        >
          Login with Spotify
        </Button>
      </Link>
    </Flex>
  );
};

export default Home;

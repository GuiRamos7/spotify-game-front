import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import * as S from './styles';

interface ISongCard {
  imageUrl: string;
  title: string;
  artist: string;
  onClick: () => void;
  isCorrect: boolean | undefined;
}

const SongCard: React.FC<ISongCard> = ({
  artist,
  imageUrl,
  title,
  onClick,
  isCorrect,
}: ISongCard) => {
  return (
    <S.Flex
      w='380px'
      h='170px'
      boxSizing='border-box'
      borderRadius='15px'
      position='relative'
      onClick={onClick}
      isCorrect={isCorrect}
    >
      <Image
        src={imageUrl}
        alt={`Cover of song ${title} by ${artist}`}
        width={150}
        height={150}
      />
      <Flex direction='column' ml='2' mt='3'>
        <Text fontSize='18px' fontWeight='bold' lineHeight='1.2'>
          {title}
        </Text>
        <Text mt='1' fontSize='16px'>
          {artist}
        </Text>
      </Flex>
    </S.Flex>
  );
};

export default SongCard;

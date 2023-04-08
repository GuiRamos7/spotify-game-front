import styled from 'styled-components';

import { Flex as ChakraBox } from '@chakra-ui/react';

export const Flex = styled(ChakraBox)`
  background: #121317;

  img {
    border-radius: 15px;
    margin-left: 10px;
    align-self: center;
  }

  &::after {
    content: '';
    position: absolute;
    width: 389px;
    height: 179px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: -1;
    border: 0px none rgba(100, 100, 100, 1);
    border-radius: 15px;
    background: conic-gradient(
        from 180deg at 50% 50%,
        rgba(0, 0, 0, 1) 0deg,
        rgba(255, 255, 255, 0.7) 17deg,
        rgba(0, 0, 0, 1) 88deg,
        rgba(255, 255, 255, 0.7) 152deg,
        rgba(0, 0, 0, 1) 225deg,
        rgba(255, 255, 255, 0.7) 289deg,
        rgba(0, 0, 0, 1) 360deg
      ),
      conic-gradient(
        from 180deg at 50% 50%,
        rgba(0, 0, 0, 1) 0deg,
        rgba(255, 255, 255, 1) 30deg,
        rgba(0, 0, 0, 1) 96deg,
        rgba(255, 255, 255, 1) 169deg,
        rgba(0, 0, 0, 1) 229deg,
        rgba(255, 255, 255, 1) 285deg,
        rgba(0, 0, 0, 1) 360deg
      ),
      radial-gradient(
        88% 127% at 13% 13%,
        rgba(248, 110, 251, 1) 8%,
        rgba(115, 66, 255, 1) 35%,
        rgba(66, 232, 255, 1) 63%,
        rgba(66, 255, 107, 1) 100%
      );
    background-blend-mode: screen, difference, normal;
  }
`;

import styled from 'styled-components';

import palette from '../../palette';

export const StyledBackground = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  position: fixed;
`;

export const StyledLoader = styled('span')`
  @keyframes spin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  height: 80px;
  width: 80px;
  display: inline-block;

  border: rgba(0, 0, 0, 0.1) 7px solid;
  border-top: ${palette.hotelSoleiImlil} 7px solid;
  border-radius: 50%;

  animation: spin 2s linear infinite;
`;

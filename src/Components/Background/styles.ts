import styled from 'styled-components';
import palette from '../../palette';

export const BackgroundContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${palette.hotelSoleiImlil};
`;

export const NotebookContainer = styled('div')`
  height: 450px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  background-color: ${palette.freshwaterLemon};
  font-family:
    Comic Sans MS,
    Comic Sans,
    cursive;
`;

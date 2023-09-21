import styled from 'styled-components';

import palette from 'palette';

export const StyledInput = styled('input')`
  width: 100%;
  height: 30px;

  border: none;
  border-bottom: 2px solid;
  background: ${palette.freshwaterLemon} !important;

  font-family:
    Comic Sans MS,
    Comic Sans,
    cursive;

  &:focus {
    outline: none;
  }
`;

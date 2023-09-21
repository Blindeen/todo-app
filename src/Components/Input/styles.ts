import styled from 'styled-components';

import palette from 'palette';

export const StyledInput = styled('input')`
  width: 100%;
  height: 30px;

  border: none;
  border-bottom: 2px solid;
  background: ${palette.freshwaterLemon} !important;

  font-family:
    ui-monospace,
    SFMono-Regular,
    SF Mono,
    Menlo,
    Consolas,
    Liberation Mono,
    monospace;
  font-weight: bold;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

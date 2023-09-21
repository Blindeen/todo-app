import styled from 'styled-components';

import palette from 'palette';

export const StyledButton = styled('button')`
  width: 100%;
  border-radius: 20px;
  padding: 5px 10px;

  font-family:
    ui-monospace,
    SFMono-Regular,
    SF Mono,
    Menlo,
    Consolas,
    Liberation Mono,
    monospace;

  background-color: ${palette.hotelSoleiImlil};
  color: ${palette.white};
`;

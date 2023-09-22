import styled from 'styled-components';

export const StyledInput = styled('input')`
  width: 100%;
  height: 30px;

  border: none;
  border-bottom: 2px solid;
  background: none;

  font-family: Consolas, monospace;
  font-weight: bold;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

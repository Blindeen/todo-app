import styled from "styled-components";
import palette from "../../palette";

export const BackgroundContainer = styled("div")`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${palette.hotelSoleiImlil};
`;

export const NotebookContainer = styled("div")`
  height: 500px;
  width: 450px;
  display: flex;
  flex-direction: column;
  
  background-color: ${palette.freshwaterLemon};
`;

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

export const NotebookArea = styled("div")`
  height: 500px;
  width: 450px;
  display: flex;
  
  background-color: ${palette.freshwaterLemon};
`;

export const LeftAreaDiv = styled("div")`
  width: 60px;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 125px;
  
  border-right: double ${palette.red};
`;

export const RightAreaDiv = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const Circle = styled("span")`
  height: 25px;
  width: 25px;
  background-color: ${palette.hotelSoleiImlil};
  border-radius: 50%;
  display: inline-block;
`;

export const HeaderArea = styled("textarea")`
  resize: none;
  height: fit-content;
  width: fit-content;
  background: none;
  border: none;
  border-bottom: solid 1px;
  outline: none;
  margin-top: 20px;
  
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const TaskArea = styled("textarea")`
  resize: none;
  height: fit-content;
  width: fit-content;
  background: none;
  border: none;
  border-bottom: solid 1px;
  outline: none;
  margin-top: 20px;

  text-align: center;
`;

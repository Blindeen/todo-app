import styled from "styled-components";
import {DeleteFilled, EditFilled} from "@ant-design/icons";

import palette from "../../palette";
import {TaskProps} from "../../interfaces";

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
  
  background-color: ${palette.freshwaterLemon};
`;

export const LeftContainer = styled("div")`
  height: 100%;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  border-right: double ${palette.red};
`;

export const RightContainer = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

export const Circle = styled("span")`
  height: 25px;
  width: 25px;
  display: inline-block;

  background-color: ${palette.hotelSoleiImlil};
  border-radius: 50%;
`;

export const HeaderArea = styled("textarea")`
  height: fit-content;
  width: fit-content;
  resize: none;
  background: none;
  border: none;
  border-bottom: solid 1px;
  outline: none;
  overflow-y: hidden;
  
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-family: Comic Sans MS, Comic Sans, cursive;
`;

export const InputContainer = styled("div")`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`;

export const StyledInput = styled("input")`
  height: fit-content;
  width: fit-content;
  resize: none;
  background: none;
  border: none;
  border-bottom: solid 1px;
  outline: none;

  text-align: center;
  font-size: 16px;
  font-family: Comic Sans MS, Comic Sans, cursive;
`;

export const TaskListContainer = styled("div")`
  height: 80%;
  width: 80%;
  
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  
  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px;
  }

  font-family: Comic Sans MS, Comic Sans, cursive;
`;

export const Task = styled("div")<TaskProps>`
  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: solid 1px;
  animation: reveal 1s;
  gap: 5px;
  
  overflow-wrap: anywhere;
  text-decoration: ${(props) => props.decoration};
`;

export const DeleteIcon = styled(DeleteFilled)`
  font-size: 20px;
  
  transition: 0.3s;
  &:hover {
    color: ${palette.red};
    font-size: 25px;
  }
`;

export const PropertiesContainer = styled("div")`
  display: flex;
  flex: 1;
  justify-content: end;
  gap: 10px;
`;

export const DeleteTaskIcon = styled(DeleteFilled)`
  font-size: 20px;
`;

export const EditTaskIcon = styled(EditFilled)`
  font-size: 20px;
`;

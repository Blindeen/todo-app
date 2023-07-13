import React from "react";

import {BackgroundContainer, LeftAreaDiv, NotebookArea, RightAreaDiv, Circle, HeaderArea, TaskArea} from "./styles";

const TODOContainer = () => {
  return (
    <BackgroundContainer>
      <NotebookArea>
        <LeftAreaDiv>
          <Circle/>
          <Circle/>
          <Circle/>
        </LeftAreaDiv>
        <RightAreaDiv>
          <HeaderArea
            rows={1}
            maxLength={20}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setTimeout(() => console.log(e.target.value), 1000);
            }}
          />
          <TaskArea rows={1}/>
        </RightAreaDiv>
      </NotebookArea>
    </BackgroundContainer>
  );
};

export default TODOContainer;

import React, { useEffect, useState } from 'react';

import * as S from './styles';
import { Task } from '../../interfaces';
import { toggleIsDone, editTask, deleteTask } from './functions';
import { setLocalStorage, getLocalStorage, isStringValid } from '../../utils';
import Checkbox from '../../Components/Checkbox';

const TODOContainer = () => {
  const taskStorage = getLocalStorage('tasks');
  const taskArray = taskStorage ? JSON.parse(taskStorage) : null;

  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState<Task[]>(taskArray ? taskArray : []);
  const [additionFlag, setAdditionFlag] = useState(false);

  useEffect(() => setLocalStorage('tasks', JSON.stringify(taskList)), [taskList]);

  useEffect(() => {
    if (additionFlag) {
      const taskListContainer = document.getElementById('task-list');
      taskListContainer?.scroll({
        top: taskListContainer.scrollHeight,
        behavior: 'smooth',
      });
      setAdditionFlag(false);
    }
  }, [additionFlag]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (!isStringValid(trimmedValue)) {
      e.currentTarget.reset();
      return;
    }

    const newValue: Task = {
      description: trimmedValue,
      isDone: false,
    };
    setTaskList([...taskList, newValue]);

    setInputValue('');
    e.currentTarget.reset();

    setAdditionFlag(true);
  };

  const taskSet = taskList.map((task, idx) => (
    <S.Task key={idx} decoration={task.isDone ? 'line-through' : 'none'}>
      <Checkbox onClick={() => setTaskList(toggleIsDone(idx, taskList))} checked={task.isDone} />
      {task.description}
      <S.PropertiesContainer className='properties-container'>
        <S.EditTaskIcon
          onClick={() => {
            const newText = window.prompt('Change description', task.description);
            if (newText) {
              setTaskList(editTask(idx, taskList, newText));
            }
          }}
        />
        <S.DeleteTaskIcon
          onClick={() => window.confirm('Do you want to remove this task?') && setTaskList(deleteTask(idx, taskList))}
        />
      </S.PropertiesContainer>
    </S.Task>
  ));

  return (
    <S.BackgroundContainer>
      <S.NotebookContainer>
        <S.LeftContainer>
          <S.Circle />
          <S.Circle />
          <S.Circle />
        </S.LeftContainer>
        <S.RightContainer>
          <S.HeaderArea
            title='header'
            rows={1}
            maxLength={20}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setLocalStorage('header', e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && e.preventDefault()}
            defaultValue={getLocalStorage('header')}
            spellCheck={false}
          />
          <S.TaskListContainer id='task-list'>{taskSet}</S.TaskListContainer>
          <S.InputContainer>
            <form onSubmit={onSubmit}>
              <S.StyledInput
                title='task-input'
                type='text'
                placeholder='Enter task'
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                spellCheck={false}
              />
            </form>
            <S.DeleteIcon
              onClick={() => window.confirm('Are you sure you want to clear this list?') && setTaskList([])}
            />
          </S.InputContainer>
        </S.RightContainer>
      </S.NotebookContainer>
    </S.BackgroundContainer>
  );
};

export default TODOContainer;

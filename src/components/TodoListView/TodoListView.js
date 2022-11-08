
import React from 'react';
// components
import ToDoItem from './ToDoItem/ToDoItem';
// redux
import { useSelector } from 'react-redux';
// other
import uniqid from 'uniqid';
// constants
import { LSNAME_TODO } from '../../constants/constants';
import styled from 'styled-components';

const Todo_List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
`

function TodoListView() {
  // get arrOfToDos from redux store
  const arrayOfToDoItems = useSelector(state => state[LSNAME_TODO])
  return (
    <Todo_List data-testid='todo-list'>
      {arrayOfToDoItems.map((toDo) => (
        <ToDoItem
          toDo={toDo}
          key={uniqid()}
        />
      ))}
    </Todo_List>
  )
}

export default TodoListView;
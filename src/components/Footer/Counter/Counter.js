import React from 'react';

// redux
import { useSelector } from 'react-redux';
// constants
import { LSNAME_TODO } from '../../../constants/constants';
import styled from 'styled-components';

const Todo_Count = styled.span `
    float: left;
    text-align: left;
`;

function Counter() {
  const toDosLeft = useSelector((state) => state[LSNAME_TODO].reduce((acc, curr) => {
    // Complete the counter function
    //It should show the number of undone to-do's
  }, 0))

  return (
    <Todo_Count>
      <strong data-testid='counter'>
        {toDosLeft}
      </strong> item left
    </Todo_Count>
  )
}

export default Counter;